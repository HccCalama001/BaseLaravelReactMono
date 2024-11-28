<?php

use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Example'); // Asegúrate de tener el componente 'Example' creado en React
});
