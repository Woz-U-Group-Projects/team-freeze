<<<<<<< HEAD:server-java-mysql/src/main/java/com/example/groupproject/GroupProjectApplication.java
package com.example.groupproject;
=======
package com.example.groupprojects;
>>>>>>> 64a778bceecf6f1c5f955e1a599ae59968009b60:server-java-mysql/src/main/java/com/example/groupprojects/GroupProjectApplications.java

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
<<<<<<< HEAD:server-java-mysql/src/main/java/com/example/groupproject/GroupProjectApplication.java
public class GroupProjectApplication {
=======
@ComponentScan(basePackages={"com.example.groupprojects"})
public class GroupProjectApplications {
>>>>>>> 64a778bceecf6f1c5f955e1a599ae59968009b60:server-java-mysql/src/main/java/com/example/groupprojects/GroupProjectApplications.java

	public static void main(String[] args) {
		SpringApplication.run(GroupProjectApplications.class, args);
	}
	
	@Bean
    public WebMvcConfigurer corsConfigurer() {
        return new WebMvcConfigurer() {
            @Override
            public void addCorsMappings(CorsRegistry registry) {
                registry.addMapping("/**").allowedOrigins("http://localhost:3000","http://localhost:4200");
            }
        };
    }

}