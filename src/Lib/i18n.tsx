import i18n from "i18next";
import { initReactI18next } from "react-i18next";

let currentLanguage = localStorage.getItem("lng") || "ENG";

i18n.use(initReactI18next).init({
  resources: {
    ENG: {
      translation: {
        Login: "Login",
        "Sign Up": "Sign Up",
        "Enter your credentials": "Enter your credentials",
        "Enter Your Email": "Enter Your Email",
        "Enter your email address": "Enter your email address",
        "Enter Your Password": "Enter Your Password",
        "Enter your password": "Enter your password",
        "Sign In": "Sign In",
        "Sign In with Google": "Sign In with Google",
        "Not Registered yet?": "Not Registered yet?",
        "Create an Account": "Create an Account",
        "Shop Now": "Shop Now",
        "Contact Us": "Contact Us",
        here: "here",
        "to get started": "to get started.",
        Welcome:
          "Welcome to our online store! Whether you're a buyer looking for great deals or a seller wanting to showcase your products, our platform offers you the opportunity to connect and thrive. Explore our wide range of products and create an account ",
        AboutUs:
          "Crafters is a team of developers who are passionate about creating online shopping experiences. Our goal is to make shopping easy and enjoyable for everyone. We focus on designing websites that are easy to use and look great. Whether you're buying clothes, electronics, or anything else, we want you to have a smooth and pleasant experience. Sellers can also create accounts on our platform to sell their products to a wide audience. We're here to help buyers and sellers connect in a friendly and trustworthy environment. Join us and explore a world of seamless online shopping!",
        "Get In Touch With Us": "Get In Touch With Us",
        "We Are Here To Help": "We Are Here To Help",
        "If you have an urgent business concern please contact us at":
          "If you have an urgent business concern please contact us at",
        "Send Us Message": "Send Us Message",
        "Your Name": "Your Name",
        "Your Email": "Your Email",
        "Your Message": "Your Message",
        "Send Message": "Send Message",
        abouts:
          "Crafters is dedicated to providing quality products and excellent service to our customers. We strive to bring unique and innovative items that enhance your lifestyle..",
        Links: "Links",
        Home: "Home",
        Products: "Products",
        "About Us": "About Us",

        Contact: "Contact",
        Tel: "Tel",
        Email: "Email",
        "© 2024 Upscale Crafters, all rights reserved":
          "© 2024 Upscale Crafters, all rights reserved",
      },
    },
    FR: {
      translation: {
        Login: "Connexion",
        "Sign Up": "Inscription",
        "Enter your credentials": "Entrez vos identifiants",
        "Enter Your Email": "Entrez votre adresse e-mail",
        "Enter your email address": "Entrez votre adresse e-mail",
        "Enter Your Password": "Entrez votre mot de passe",
        "Enter your password": "Entrez votre mot de passe",
        "Sign In": "Se connecter",
        "Sign In with Google": "Se connecter avec Google",
        "Not Registered yet?": "Pas encore inscrit?",
        "Create an Account": "Créer un compte",
        "Shop Now": "Acheter maintenant",
        "Contact Us": "Contactez-nous",
        here: "ici",
        "to get started": "pour commencer.",
        Welcome:
          "Bienvenue dans notre boutique en ligne! Que vous soyez un acheteur à la recherche de bonnes affaires ou un vendeur souhaitant mettre en valeur vos produits, notre plateforme vous offre l'opportunité de vous connecter et de prospérer. Explorez notre large gamme de produits et créez un compte  ",
        AboutUs:
          "Crafters est une équipe de développeurs passionnés par la création d'expériences de shopping en ligne. Notre objectif est de rendre le shopping facile et agréable pour tout le monde. Nous nous concentrons sur la conception de sites Web faciles à utiliser et attrayants. Que vous achetiez des vêtements, des appareils électroniques ou tout autre produit, nous voulons que vous ayez une expérience fluide et agréable. Les vendeurs peuvent également créer des comptes sur notre plateforme pour vendre leurs produits à un large public. Nous sommes là pour aider les acheteurs et les vendeurs à se connecter dans un environnement convivial et fiable. Rejoignez-nous et explorez un monde de shopping en ligne sans couture!",
        "Get In Touch With Us": "Contactez-nous",
        "We Are Here To Help": "Nous sommes là pour vous aider",
        "If you have an urgent business concern please contact us at":
          "Si vous avez une préoccupation urgente, veuillez nous contacter au",
        "Send Us Message": "Envoyez-nous un message",
        "Your Name": "Votre nom",
        "Your Email": "Votre e-mail",
        "Your Message": "Votre message",
        "Send Message": "Envoyer le message",
        abouts:
          "Crafters s'engage à fournir des produits de qualité et un excellent service à nos clients. Nous nous efforçons d'apporter des articles uniques et innovants qui améliorent votre style de vie..",
        Links: "Liens",
        Home: "Accueil",
        Products: "Produits",
        "About Us": "À propos de nous",

        Contact: "Contact",
        Tel: "Tel",
        Email: "Email",
        "© 2024 Upscale Crafters, all rights reserved":
          "© 2024 Upscale Crafters, tous droits réservés",
      },
    },
    KINY: {
      translation: {
        Login: "Injira",
        "Sign Up": "Iyandikishe",
        "Enter your credentials": "Injiza imyirondoro yawe",
        "Enter Your Email": "Injiza Email yawe",
        "Enter your email address": "Injiza aderesi yawe ya email",
        "Enter Your Password": "Injiza Ijambo ry'ibanga",
        "Enter your password": "Injiza ijambo ry'ibanga",
        "Sign In": "Injira",
        "Sign In with Google": "Injira ukoresheje Google",
        "Not Registered yet?": "Nturariyandikisha?",
        "Create an Account": "Hanga Konti",
        "Shop Now": "Gura Ubu",
        "Contact Us": "Twandikire",
        here: "hano",
        "to get started": "kugirango utangire.",
        Welcome:
          "Murakaza neza kuri butike yacu yo kuri interineti! Niba uri umuguzi ushaka kubona ibiciro byiza cyangwa umucuruzi ushaka kugaragaza ibicuruzwa byawe, urubuga rwacu rukugezaho amahirwe yo guhuza no gutera imbere. Reba byinshi mubicuruzwa byacu kandi wiyandikishe  ",
        AboutUs:
          "Crafters ni itsinda ry'abakora porogaramu bafite ishyaka ryo guhanga uburambe bwo guhaha kuri interineti. Intego yacu ni ugufasha abantu bose guhaha byoroshye kandi bishimishije. Twibanda ku gushushanya imbuga za interineti zoroshye gukoresha kandi zisa neza. Niba ugura imyenda, ibikoresho by'amashanyarazi, cyangwa ikindi kintu icyo ari cyo cyose, turashaka ko ugira uburambe bwiza kandi bwiza. Abacuruzi nabo barashobora guhanga konti ku rubuga rwacu kugirango bagurishe ibicuruzwa byabo ku bantu benshi. Turi hano kugirango dufashe abaguzi n'abacuruzi guhuza mu buryo bwiza kandi bwizewe. Duhuze maze usangire isi yo guhaha kuri interineti nta mbogamizi!",
        "Get In Touch With Us": "Tuvugishe",
        "We Are Here To Help": "Turahari Kugufasha",
        "If you have an urgent business concern please contact us at":
          "Niba ufite ikibazo cyihutirwa cya business nyamuneka twandikire kuri",
        "Send Us Message": "Twandikire ubutumwa",
        "Your Name": "Izina ryawe",
        "Your Email": "Imeyili yawe",
        "Your Message": "Ubutumwa bwawe",
        "Send Message": "Ohereza Ubutumwa",
        abouts:
          "Crafters yiyemeje gutanga ibicuruzwa byiza na serivisi nziza kubakiriya bacu. Twiyemeje kuzana ibicuruzwa byihariye kandi bishya bigira uruhare mw'iterambere ry'imibereho yawe..",
        Links: "Amakuru",
        Home: "Ahabanza",
        Products: "Ibicuruzwa",
        "About Us": "Ibyacu",

        Contact: "Amakuru",
        Tel: "Tel",
        Email: "Imeyili",
        "© 2024 Upscale Crafters, all rights reserved":
          "© 2024 Upscale Crafters, uburenganzira bwose burabitswe",
      },
    },
  },
  lng: `${currentLanguage}`,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
