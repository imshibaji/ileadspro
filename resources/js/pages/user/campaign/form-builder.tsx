/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

interface Field {
    id: number;
    name: string;
    label: string;
    type: "text" | "password" | "textarea" | "email" | "number" | "select" | "checkbox" | "radio" | "file";
    required: boolean;
    minLength?: number;
    maxLength?: number;
    options?: string[];
    placeholder?: string;
    value?: string;
}

const generateSchema = (fields: Field[]) => {
    const schemaObject: any = {};
    fields.forEach(field => {
        let validator;

        if (field.type === "checkbox") {
            validator = z.union([z.boolean(), z.array(z.string())]); // Accepts both boolean & array
            if (field.required) {
              validator = validator.refine(val => val === true || (Array.isArray(val) && val.length > 0), {
                message: `${field.label} is required`,
              });
            }
          } else if (field.type === "radio" || field.type === "select") {
            validator = z.string().optional(); // Allow empty value
            if (field.required) {
              validator = validator.refine(val => val !== undefined && val !== "", {
                message: `${field.label} is required`,
              });
            }
          } else if (field.type === "file") {
            validator = z.custom<FileList | null>((val) => {
              if (!field.required) return true; // Skip validation if not required
              return val instanceof FileList && val.length > 0;
            }, { message: `${field.label} is required` });
          } else {
            validator = z.string();
            if (field.required) validator = validator.nonempty(`${field.label} is required`);
            if (field.minLength) validator = validator.min(field.minLength, `${field.label} must be at least ${field.minLength} characters`);
            if (field.maxLength) validator = validator.max(field.maxLength, `${field.label} must be at most ${field.maxLength} characters`);
        }
        schemaObject[field.name] = validator;
    });
    return z.object(schemaObject);
};

export default function RealTimeFormBuilder() {
    const [fields, setFields] = useState<Field[]>([
        { id: 1, name: "name", label: "Full Name", type: "text", required: true, minLength: 3 },
        { id: 2, name: "email", label: "Email", type: "email", required: true },
    ]);
    const [submittedData, setSubmittedData] = useState<Record<string, any> | null>(null);

    const formSchema = generateSchema(fields);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (data: Record<string, any>) => {
        console.log("Lead Captured:", data);
        setSubmittedData(data);
    };

    const addField = (type: Field["type"], label: string) => {
        const newField: Field = {
            id: fields.length + 1,
            name: `field${fields.length + 1}`,
            label,
            type,
            required: false,
            options: type === "select" || type === "radio" ? ["Option 1", "Option 2"] : undefined,
        };
        setFields([...fields, newField]);
    };

    const updateField = (id: number, key: keyof Field, value: any) => {
        setFields(
            fields.map((field) => (field.id === id ? { ...field, [key]: value } : field))
        );
    };

    const removeField = (id: number) => {
        setFields(fields.filter((field) => field.id !== id));
    };

    return (
        <div className="flex space-x-6 min-h-[80vh] p-6 dark:bg-gray-900 dark:text-white bg-gray-100 text-black">
            <div className="w-1/4 p-4 shadow-lg rounded-lg dark:bg-gray-800 bg-white">
                <h2 className="text-xl font-bold mb-4">Add Fields</h2>
                {[
                    { type: "text", label: "Text Field" },
                    { type: "password", label: "Password Field" },
                    { type: "textarea", label: "Text Area" },
                    { type: "email", label: "Email Field" },
                    { type: "number", label: "Number Field" },
                    { type: "select", label: "Dropdown Field" },
                    { type: "checkbox", label: "Checkbox" },
                    { type: "radio", label: "Radio Button" },
                    { type: "file", label: "File Upload" },
                ].map(({ type, label }) => (
                    <button
                        key={type}
                        type="button"
                        onClick={() => addField(type as Field["type"], label)}
                        className="w-full bg-blue-500 text-white p-2 my-1 rounded hover:bg-blue-600"
                    >
                        + {label}
                    </button>
                ))}
            </div>

            <div className="w-1/3 p-6 shadow-lg rounded-lg dark:bg-gray-800 bg-white">
                <h2 className="text-xl font-bold mb-4">Form Builder</h2>
                <form className="space-y-4">
                    {fields.map((field) => (
                        <div key={field.id}>
                            <div className="flex gap-2">
                                <div className="w-1/2">
                                    <label className="block font-bold">Name</label>
                                    <input
                                        type="text"
                                        value={field.name}
                                        onChange={(e) => updateField(field.id, "name", e.target.value || " ")}
                                        className="w-full p-2 border rounded mt-1 dark:bg-gray-700 dark:text-white bg-gray-200 text-black"
                                    />
                                </div>
                                <div className="w-1/2">
                                    <label className="block font-bold">Lavel</label>
                                    <input
                                        type="text"
                                        value={field.label}
                                        onChange={(e) => updateField(field.id, "label", e.target.value || "")}
                                        className="w-full p-2 border rounded mt-1 dark:bg-gray-700 dark:text-white bg-gray-200 text-black"
                                    />
                                </div>
                            </div>
                            {field.type === "select" || field.type === "radio" || field.type === "checkbox" ? (
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Comma-separated options"
                                        value={field.options?.join(", ") || ""}
                                        onChange={(e) => updateField(field.id, "options", e.target.value.split(",").map(opt => opt.trim()))}
                                        className="w-full p-2 border rounded mt-1 dark:bg-gray-700 dark:text-white bg-gray-200 text-black"
                                    />
                                </div>
                            ) : null}

                            <label className="flex gap-2">
                                <input
                                    type="checkbox"
                                    checked={field.required}
                                    onChange={(e) => updateField(field.id, "required", e.target.checked)}
                                    className="mr-2"
                                /> Required
                            </label>
                            {field.type === "text" || field.type === "password" || field.type === "textarea" || field.type === "email" ? (
                                <div className="flex gap-2">
                                    <input
                                        type="number"
                                        placeholder="Min Length"
                                        value={field.minLength || ""}
                                        onChange={(e) => updateField(field.id, "minLength", Number(e.target.value || ""))}
                                        className="w-full p-2 border rounded mt-1 dark:bg-gray-700 dark:text-white bg-gray-200 text-black"
                                    />
                                    <input
                                        type="number"
                                        placeholder="Max Length"
                                        value={field.maxLength || ""}
                                        onChange={(e) => updateField(field.id, "maxLength", Number(e.target.value || ""))}
                                        className="w-full p-2 border rounded mt-1 dark:bg-gray-700 dark:text-white bg-gray-200 text-black"
                                    />
                                </div>
                            ) : null}


                            <button
                                type="button"
                                onClick={() => removeField(field.id)}
                                className="bg-red-500 text-white px-2 py-1 mt-2 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                </form>
            </div>

            {/* Form Preview, Render and Submission */}
            <div className="w-1/3 p-6 shadow-lg rounded-lg dark:bg-gray-800 bg-white">
                <h2 className="text-xl font-bold mb-4">Preview Form</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {fields.map((field) => (
                        <div key={field.id}>
                            <label className="block font-medium">{field.label}</label>
                            {field.type === "text" || field.type === "email" || field.type === "password" || field.type === "number" ? (
                                <div className="w-full">
                                    <input {...register(field.name)} type={field.type} className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white bg-gray-200 text-black" />
                                    {errors[field.name] && <p className="text-red-500">{errors[field.name]?.message}</p>}
                                </div>
                            ) : field.type === "select" ? (
                                <div className="w-full">
                                    <select {...register(field.name)} className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white bg-gray-200 text-black">
                                        {field.options?.map((option, index) => (
                                            <option key={index} value={option}>{option}</option>
                                        ))}
                                    </select>
                                    {errors[field.name] && <p className="text-red-500">{errors[field.name]?.message}</p>}
                                </div>
                            ) : field.type === "checkbox" ? (
                                field.options?.map((option, index) => (
                                    <div key={index}>
                                        <label className="ml-2">
                                            <input {...register(field.name)} type="checkbox" value={option} className="mr-1" />
                                            {option}
                                        </label>
                                        {errors[field.name] && <p className="text-red-500">{errors[field.name]?.message}</p>}
                                    </div>
                                ))
                            )
                                : field.type === "textarea" ? (
                                    <div className="w-full">
                                        <textarea {...register(field.name)} className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white bg-gray-200 text-black" />
                                        {errors[field.name] && <p className="text-red-500">{errors[field.name]?.message}</p>}
                                    </div>
                                ) : field.type === "radio" ? (
                                    field.options?.map((option, index) => (
                                        <div key={index}>
                                            <label className="ml-2">
                                                <input {...register(field.name)} type="radio" value={option} className="mr-1" />
                                                {option}
                                            </label>
                                            {errors[field.name] && <p className="text-red-500">{errors[field.name]?.message}</p>}
                                        </div>
                                    ))
                                ) : field.type === "file" ? (
                                    <div className="w-full">
                                        <input {...register(field.name)} type="file" className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white bg-gray-200 text-black" />
                                        {errors[field.name] && <p className="text-red-500">{errors[field.name]?.message}</p>}
                                    </div>
                                ) : null}
                        </div>
                    ))}
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
                    >
                        Submit Lead
                    </button>
                </form>
                {submittedData && (
                    <div className="mt-4 p-4 shadow-lg rounded-lg dark:bg-gray-700 dark:text-white bg-gray-200 text-black">
                        <h3 className="text-lg font-bold">Submitted Data:</h3>
                        <pre>{JSON.stringify(submittedData, null, 2)}</pre>
                    </div>
                )}
            </div>

            {/* Form Schema */}
            <div className="w-1/3 p-6 shadow-lg rounded-lg dark:bg-gray-800 bg-white">
                <h2 className="text-xl font-bold mb-4">Form Schema</h2>
                {fields && (
                    <div className="overflow-x-scroll max-w-[300px] mt-4 p-4 shadow-lg rounded-lg dark:bg-gray-700 dark:text-white bg-gray-200 text-black">
                        <pre>{JSON.stringify(fields, null, 2)}</pre>
                    </div>
                )}
            </div>
        </div>
    );
}
