import ContactForm from "./form";
import SocialCard from "./social";
import Image from "next/image";

const ColumnImage = "/images/about/dangmoz-anime.png";

export const metadata = {
  title: "| Darwin Garcia | Contact Me and Social Links",
  description: "Interested in collaborating? Contact me through this form or my social media accounts.",
  keywords: 'Data Science, Portfolio, Photographer, PC Builder, YouTuber, Developer, Next.js, React, Tailwind CSS',
};

export default function Contact() {
  return (
    // Contenedor principal de la página
    <main className="container mx-auto px-8 pt-24 pb-8">
      
      {/* --- SECCIÓN 1: CONTENEDOR DE LAS DOS COLUMNAS --- */}
      {/* Este 'section' agrupa el formulario y la imagen para que funcionen como una sola unidad */}
      <section className="flex flex-col md:flex-row items-center justify-center gap-16">
        
        {/* --- COLUMNA IZQUIERDA: FORMULARIO --- */}
        {/* Usamos 'md:w-1/2' para que en escritorio ocupe la mitad del espacio */}
        <div className="w-full md:w-1/2 flex justify-center">
          <ContactForm />
        </div>

        {/* --- COLUMNA DERECHA: IMAGEN --- */}
        {/* Usamos 'md:w-1/2' para que en escritorio ocupe la otra mitad */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center">
          <Image 
            src={ColumnImage}
            alt="Profile Background"
            width={650}
            height={650}
            className='object-contain'
            priority // Opcional: Carga la imagen más rápido si es importante
          />
        </div>
                
      </section>

      {/* --- SECCIÓN 2: COMPONENTE DE REDES SOCIALES (ANCHO COMPLETO) --- */}
      {/* Al estar fuera de la sección anterior, ocupa su propia fila de ancho completo. */}
      {/* 'mt-16' añade un margen superior para separarla visualmente. */}
      <section className="mt-16">
        <SocialCard />
      </section>         
    </main>
  );
}