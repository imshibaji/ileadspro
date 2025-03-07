<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('avatar')->nullable();
            $table->string('phone')->nullable();
            $table->string('role')->default('user');
            $table->string('status')->default('inactive');
            $table->bigInteger('total_logins')->default(0);
            $table->string('last_login')->nullable();
            $table->string('last_ip')->nullable();
            $table->string('last_agent')->nullable();
            $table->string('last_page')->nullable();
            $table->string('last_activity')->nullable();
            $table->string('last_session')->nullable();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('avatar');
            $table->dropColumn('phone');
            $table->dropColumn('role');
            $table->dropColumn('status');
            $table->dropColumn('total_logins');
            $table->dropColumn('last_login');
            $table->dropColumn('last_ip');
            $table->dropColumn('last_agent');
            $table->dropColumn('last_page');
            $table->dropColumn('last_activity');
            $table->dropColumn('last_session');
        });
    }
};
