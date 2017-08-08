<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCitiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('cities', function (Blueprint $table) {
            $table->string('name');
            $table->string('department_name');
            $table->string('country_name');
            $table->timestamps();
            $table->primary([ 'name', 'department_name', 'country_name' ]);

            $table->foreign([ 'department_name', 'country_name' ])
                ->references([ 'name', 'country_name' ])->on('departments')->onUpdate('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('cities');
    }
}
