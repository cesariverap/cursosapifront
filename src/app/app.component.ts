import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'courses-front';
  courses = [
    {
      "current_price": "$0.00",
      "discount": "-100%",
      "image_url": "https://img-c.udemycdn.com/course/480x270/5483928_0bf1.jpg",
      "instructor": "Renato Jesús Yacolca Neyra",
      "link": "https://www.cursosdev.com/coupons-udemy/master-en-diseno-web-para-no-programadores",
      "original_price": "$19.99",
      "rating": "4.2",
      "scraped_at": "2025-06-10T01:49:31.959008",
      "title": "Máster en Diseño Web Para No Programadores 2025"
    },
    {
      "current_price": "$0.00",
      "discount": "-100%",
      "image_url": "https://img-c.udemycdn.com/course/480x270/5525936_400d_2.jpg",
      "instructor": "Renato Jesús Yacolca Neyra",
      "link": "https://www.cursosdev.com/coupons-udemy/como-crear-una-pagina-de-ventas-para-hotmart",
      "original_price": "$19.99",
      "rating": "3.9",
      "scraped_at": "2025-06-10T01:49:31.961242",
      "title": "Cómo Crear una Página de Ventas Para Hotmart 2025"
    },
    {
      "current_price": "$0.00",
      "discount": "-100%",
      "image_url": "https://img-c.udemycdn.com/course/480x270/6588621_57bb_3.jpg",
      "instructor": "Vivian Aranha",
      "link": "https://www.cursosdev.com/coupons-udemy/bootcamp-de-agentes-de-ia-crea-chatbots-inteligentes",
      "original_price": "$59.99",
      "rating": "4.4",
      "scraped_at": "2025-06-10T01:49:31.963237",
      "title": "[ES] Bootcamp Agentes IA: Crea Chatbots Inteligentes"
    },
    {
      "current_price": "$0.00",
      "discount": "-100%",
      "image_url": "https://img-c.udemycdn.com/course/480x270/5480542_53c6_2.jpg",
      "instructor": "Renato Jesús Yacolca Neyra",
      "link": "https://www.cursosdev.com/coupons-udemy/elementor-hosting-como-crear-una-pagina-web-con-wordpress",
      "original_price": "$19.99",
      "rating": "4.2",
      "scraped_at": "2025-06-10T01:49:31.965158",
      "title": "Elementor Hosting: Cómo Crear una Página Web con WordPress"
    },
    {
      "current_price": "$0.00",
      "discount": "-100%",
      "image_url": "https://img-c.udemycdn.com/course/480x270/5375370_6a03_2.jpg",
      "instructor": "Renato Jesús Yacolca Neyra",
      "link": "https://www.cursosdev.com/coupons-udemy/master-en-elementor-desde-cero-hasta-experto",
      "original_price": "$19.99",
      "rating": "4.3",
      "scraped_at": "2025-06-10T01:49:31.966070",
      "title": "Máster en Elementor 2025, ¡Desde Cero Hasta Experto!"
    },
    {
      "current_price": "$0.00",
      "discount": "-100%",
      "image_url": "https://img-c.udemycdn.com/course/480x270/5375708_7f55_2.jpg",
      "instructor": "Renato Jesús Yacolca Neyra",
      "link": "https://www.cursosdev.com/coupons-udemy/master-en-wordpress-y-chatgpt-desde-cero-hasta-experto",
      "original_price": "$19.99",
      "rating": "4.2",
      "scraped_at": "2025-06-10T01:49:31.966973",
      "title": "Máster en WordPress y ChatGPT, ¡Desde Cero Hasta Experto!"
    },
    {
      "current_price": "$0.00",
      "discount": "-100%",
      "image_url": "https://img-c.udemycdn.com/course/480x270/5343544_c3a7.jpg",
      "instructor": "Renato Jesús Yacolca Neyra",
      "link": "https://www.cursosdev.com/coupons-udemy/como-crear-una-pagina-web-con-wordpress-y-elementor-pro",
      "original_price": "$19.99",
      "rating": "4.3",
      "scraped_at": "2025-06-10T01:49:31.967904",
      "title": "Cómo Crear una Página Web con WordPress y Elementor PRO 2025"
    },
    {
      "current_price": "$0.00",
      "discount": "-100%",
      "image_url": "https://img-c.udemycdn.com/course/480x270/5343154_a711_2.jpg",
      "instructor": "Renato Jesús Yacolca Neyra",
      "link": "https://www.cursosdev.com/coupons-udemy/como-crear-una-tienda-online-con-wordpress-y-chatgpt",
      "original_price": "$19.99",
      "rating": "4.3",
      "scraped_at": "2025-06-10T01:49:31.968788",
      "title": "Cómo Crear una Tienda Online con WordPress y ChatGPT 2025"
    },
    {
      "current_price": "$0.00",
      "discount": "-100%",
      "image_url": "https://img-c.udemycdn.com/course/480x270/6473379_cce5.jpg",
      "instructor": "Andrii Piatakha",
      "link": "https://www.cursosdev.com/coupons-udemy/owasp-learnit-es",
      "original_price": "$41.99",
      "rating": "5.0",
      "scraped_at": "2025-06-10T01:49:31.969657",
      "title": "OWASP Seguridad API Top 10 2021 + 2023 con Ejemplos en Java"
    },
    {
      "current_price": "$0.00",
      "discount": "-100%",
      "image_url": "https://img-c.udemycdn.com/course/480x270/5480430_710f.jpg",
      "instructor": "Renato Jesús Yacolca Neyra",
      "link": "https://www.cursosdev.com/coupons-udemy/all-in-one-wp-migration-migra-tu-sitio-web-de-wordpress",
      "original_price": "$19.99",
      "rating": "4.2",
      "scraped_at": "2025-06-10T01:49:31.970527",
      "title": "All in One WP Migration: Migra tu Sitio Web de WordPress"
    },
    {
      "current_price": "$0.00",
      "discount": "-100%",
      "image_url": "https://img-c.udemycdn.com/course/480x270/5356984_9fde_2.jpg",
      "instructor": "Renato Jesús Yacolca Neyra",
      "link": "https://www.cursosdev.com/coupons-udemy/directorio-de-plugins-para-wordpress",
      "original_price": "$19.99",
      "rating": "4.2",
      "scraped_at": "2025-06-10T01:49:31.971387",
      "title": "Directorio de Plugins para WordPress 2025"
    },
    {
      "current_price": "$0.00",
      "discount": "-100%",
      "image_url": "https://img-c.udemycdn.com/course/480x270/6473383_5f4b.jpg",
      "instructor": "Andrii Piatakha",
      "link": "https://www.cursosdev.com/coupons-udemy/codificacion-segura-learnit",
      "original_price": "$41.99",
      "rating": "4.6",
      "scraped_at": "2025-06-10T01:49:31.972288",
      "title": "Codificación Segura en Java con Ejemplos de Aplicaciones Web"
    },
    {
      "current_price": "$0.00",
      "discount": "-100%",
      "image_url": "https://img-c.udemycdn.com/course/480x270/6583069_3257.jpg",
      "instructor": "Vivian Aranha",
      "link": "https://www.cursosdev.com/coupons-udemy/de-la-receta-al-chef-conviertete-en-ingeniero-de-llm",
      "original_price": "$19.99",
      "rating": "4.4",
      "scraped_at": "2025-06-10T01:49:31.973152",
      "title": "[ES] De la Receta al Chef: Conviértete en Ingeniero de LLM"
    },
    {
      "current_price": "$0.00",
      "discount": "-100%",
      "image_url": "https://img-c.udemycdn.com/course/480x270/5578744_31e6_5.jpg",
      "instructor": "Renato Jesús Yacolca Neyra",
      "link": "https://www.cursosdev.com/coupons-udemy/como-crear-un-embudo-de-ventas-con-wordpress-desde-cero",
      "original_price": "$19.99",
      "rating": "3.8",
      "scraped_at": "2025-06-10T01:49:31.974020",
      "title": "Cómo Crear un Embudo de Ventas con WordPress Desde Cero 2025"
    },
    {
      "current_price": "$0.00",
      "discount": "-100%",
      "image_url": "https://img-c.udemycdn.com/course/480x270/5576672_6ff3.jpg",
      "instructor": "Renato Jesús Yacolca Neyra",
      "link": "https://www.cursosdev.com/coupons-udemy/como-crear-una-pagina-web-con-inteligencia-artificial",
      "original_price": "$19.99",
      "rating": "3.6",
      "scraped_at": "2025-06-10T01:49:31.974950",
      "title": "Cómo Crear una Página Web con Inteligencia Artificial 2025"
    },
    {
      "current_price": "$0.00",
      "discount": "-100%",
      "image_url": "https://img-c.udemycdn.com/course/480x270/5637748_6054_2.jpg",
      "instructor": "Renato Jesús Yacolca Neyra",
      "link": "https://www.cursosdev.com/coupons-udemy/como-crear-un-blog-con-inteligencia-artificial",
      "original_price": "$19.99",
      "rating": "4.0",
      "scraped_at": "2025-06-10T01:49:31.975898",
      "title": "Cómo Crear un Blog con Inteligencia Artificial 2025"
    },
    {
      "current_price": "$0.00",
      "discount": "-100%",
      "image_url": "https://img-c.udemycdn.com/course/480x270/6473395_242d.jpg",
      "instructor": "Andrii Piatakha",
      "link": "https://www.cursosdev.com/coupons-udemy/owasp-security-learnit-es",
      "original_price": "$39.99",
      "rating": "4.4",
      "scraped_at": "2025-06-10T01:49:31.976778",
      "title": "OWASP Top 10 2023 de Seguridad en APIs: Guía Completa"
    },
    {
      "current_price": "$0.00",
      "discount": "-100%",
      "image_url": "https://img-c.udemycdn.com/course/480x270/6473413_01fd.jpg",
      "instructor": "Andrii Piatakha",
      "link": "https://www.cursosdev.com/coupons-udemy/mejores-practicas-seguridad-learnit",
      "original_price": "$41.99",
      "rating": "4.3",
      "scraped_at": "2025-06-10T01:49:31.977655",
      "title": "Mejores Prácticas de Seguridad en Aplicaciones Web"
    }
  ];
  coursesList = [];
  ngOnInit(): void {
    this.coursesList = this.courses;
  }
  searchCourse(e){
    if(e.length > 0){
      this.coursesList = this.courses.filter(c => c.title.toLocaleLowerCase().includes(e));
    }else{
      this.coursesList = this.courses;
    }
  }
}
