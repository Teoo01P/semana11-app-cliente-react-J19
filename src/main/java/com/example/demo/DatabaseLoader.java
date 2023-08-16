package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {

	private final LibroRepository repository;

	@Autowired
	public DatabaseLoader(LibroRepository repository) {
		this.repository = repository;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repository.save(new Libro("Cien años de Soledad",                "Novela",  "novela escrita por Gabriel Garcia Marquez en 1967"));
		this.repository.save(new Libro("Harry Potter y la piedra filosofal",  "Fantasia", "es el primer libro de la serie escrita por J.K. Rowling"));
		this.repository.save(new Libro("Don Quijote de la Mancha",            "Satira", "novela escrita por Gabriel Garcia Marquez en 1967"));
	}
}