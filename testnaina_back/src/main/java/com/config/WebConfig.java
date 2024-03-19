package com.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("*") // Configurez l'URL pour laquelle vous souhaitez autoriser CORS
                .allowedOrigins("*") // Autorisez les requêtes depuis cette origine (votre application Ionic)
                .allowedMethods("GET", "POST", "PUT", "DELETE") // Autorisez les méthodes HTTP spécifiées
                .allowedHeaders("*"); // Autorisez tous les en-têtes HTTP
    }
}