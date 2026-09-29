const CONFIG = {
  phone: "212600000000",
  whatsapp: "212600000000",
  instagram: "https://www.instagram.com/madina_cafe_restaurant",
  // TODO: Remplacer par l'adresse exacte de Madina Cafe & Restaurant.
  address: "Adresse à compléter",
  hours: [
    { day: "Lundi - Jeudi", time: "08:00 - 23:00" },
    { day: "Vendredi", time: "08:00 - 00:00" },
    { day: "Samedi - Dimanche", time: "08:00 - 00:00" }
  ]
};

// Menu data: edit names, descriptions and prices here.
const MENU_ITEMS = [
  { category: "pizza", name: "Pizza Margherita", description: "Sauce tomate, mozzarella, basilic frais.", price: 55, image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80" },
  { category: "pizza", name: "Pizza Pepperoni", description: "Pepperoni, mozzarella fondante, sauce tomate maison.", price: 70, image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=800&q=80" },
  { category: "pizza", name: "Pizza Madina", description: "Poulet, poivrons, champignons, olives et fromage.", price: 78, image: "https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?auto=format&fit=crop&w=800&q=80" },
  { category: "salad", name: "Salade César", description: "Poulet grillé, parmesan, croûtons et sauce César.", price: 62, image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&w=800&q=80" },
  { category: "salad", name: "Salade Niçoise", description: "Thon, oeuf, légumes croquants et olives.", price: 58, image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80" },
  { category: "salad", name: "Salade Fraîcheur", description: "Crudités de saison, avocat et vinaigrette citronnée.", price: 54, image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80" },
  { category: "breakfast", name: "Petit-déjeuner Marocain", description: "Msemen, harcha, miel, olives, fromage et thé.", price: 49, image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80" },
  { category: "breakfast", name: "Pancakes", description: "Pancakes moelleux, fruits, miel ou chocolat.", price: 45, image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80" },
  { category: "breakfast", name: "Omelette", description: "Oeufs, herbes fraîches, fromage et pain grillé.", price: 38, image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=800&q=80" },
  { category: "mains", name: "Poulet farci sauce crème", description: "Poulet tendre, farce maison, sauce crème et légumes.", price: 92, image: "https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=800&q=80" },
  { category: "mains", name: "Pastilla aux fruits de mer", description: "Feuilletage croustillant, fruits de mer et épices douces.", price: 110, image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80" },
  { category: "mains", name: "Émincé de boeuf", description: "Boeuf sauté, sauce champignons et accompagnement.", price: 98, image: "https://images.unsplash.com/photo-1559847844-5315695dadae?auto=format&fit=crop&w=800&q=80" },
  { category: "juice", name: "Jus Jardin Frais", description: "Cocktail fruité maison, préparé à la minute.", price: 38, image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=800&q=80" },
  { category: "juice", name: "Jus d'orange pressé", description: "Orange fraîche pressée, simple et vitaminée.", price: 28, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80" },
  { category: "juice", name: "Jus avocat fruits secs", description: "Avocat crémeux, lait, amandes et dattes.", price: 42, image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?auto=format&fit=crop&w=800&q=80" },
  { category: "couscous", name: "Couscous du vendredi", description: "Couscous marocain aux légumes, servi chaque vendredi.", price: 85, image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80" }
];

const CATEGORIES = [
  { id: "all", label: "Tout", icon: "fa-border-all" },
  { id: "pizza", label: "Pizza", icon: "fa-pizza-slice" },
  { id: "salad", label: "Salad", icon: "fa-leaf" },
  { id: "breakfast", label: "Breakfast", icon: "fa-mug-saucer" },
  { id: "mains", label: "Mains", icon: "fa-utensils" },
  { id: "juice", label: "Jus frais", icon: "fa-glass-water" },
  { id: "couscous", label: "Couscous", icon: "fa-bowl-food" }
];

// Placeholder reviews. Replace with real customer reviews when available.
const REVIEWS = [
  { name: "Client Madina", text: "Très belle ambiance, petit-déjeuner généreux et service attentionné.", rating: 5 },
  { name: "Cliente Madina", text: "La pizza était croustillante et les jus frais vraiment délicieux.", rating: 5 },
  { name: "Avis placeholder", text: "Une adresse agréable pour déjeuner entre amis ou dîner en famille.", rating: 5 },
  { name: "Client placeholder", text: "Le couscous du vendredi donne envie de revenir chaque semaine.", rating: 5 },
  { name: "Avis client", text: "Terrasse agréable, carte variée et plats bien présentés.", rating: 5 }
];

const TRANSLATIONS = {
  fr: {
    "nav.home": "Accueil",
    "nav.menu": "Menu",
    "nav.specials": "Spécialités",
    "nav.gallery": "Galerie",
    "nav.reviews": "Avis",
    "nav.contact": "Contact",
    "nav.reserve": "Réserver",
    "hero.eyebrow": "Cafe . Restaurant . All day",
    "hero.subtitle": "From breakfast to dinner, where comfort meets flavor",
    "hero.book": "Réserver une table",
    "hero.menu": "Découvrir le menu",
    "about.eyebrow": "Bienvenue chez Madina",
    "about.title": "Une adresse lumineuse du matin au soir",
    "about.text": "Madina Cafe & Restaurant vous accueille toute la journée: petit-déjeuner gourmand le matin, salades fraîches et pizzas au déjeuner, plats généreux au dîner, jus pressés et ambiance terrasse pour prendre le temps de bien manger.",
    "menu.eyebrow": "Carte",
    "menu.title": "Menu Madina",
    "menu.text": "Des prix indicatifs en MAD, faciles à mettre à jour dans le fichier JavaScript.",
    "specials.eyebrow": "Signatures",
    "specials.title": "Les spécialités à ne pas manquer",
    "gallery.eyebrow": "Galerie",
    "gallery.title": "Une table qui donne envie",
    "reviews.eyebrow": "Avis clients",
    "reviews.title": "Ce que les clients apprécient",
    "reservation.eyebrow": "Réservation",
    "reservation.title": "Réserver une table sur WhatsApp",
    "reservation.text": "Remplissez les détails, puis envoyez votre demande directement à Madina.",
    "contact.eyebrow": "Contact & Location",
    "contact.title": "Nous trouver"
  },
  en: {
    "nav.home": "Home",
    "nav.menu": "Menu",
    "nav.specials": "Specials",
    "nav.gallery": "Gallery",
    "nav.reviews": "Reviews",
    "nav.contact": "Contact",
    "nav.reserve": "Book",
    "hero.eyebrow": "Cafe . Restaurant . All day",
    "hero.subtitle": "From breakfast to dinner, where comfort meets flavor",
    "hero.book": "Book a table",
    "hero.menu": "Explore the menu",
    "about.eyebrow": "Welcome to Madina",
    "about.title": "A bright address from morning to night",
    "about.text": "Madina Cafe & Restaurant welcomes you all day: generous breakfast in the morning, fresh salads and pizzas at lunch, comforting mains at dinner, pressed juices and a terrace mood made for slowing down.",
    "menu.eyebrow": "Menu",
    "menu.title": "Madina Menu",
    "menu.text": "Indicative prices in MAD, easy to update in the JavaScript file.",
    "specials.eyebrow": "Signatures",
    "specials.title": "Specialties not to miss",
    "gallery.eyebrow": "Gallery",
    "gallery.title": "A table that looks as good as it tastes",
    "reviews.eyebrow": "Guest reviews",
    "reviews.title": "What guests enjoy",
    "reservation.eyebrow": "Reservation",
    "reservation.title": "Book a table on WhatsApp",
    "reservation.text": "Add your details, then send your request directly to Madina.",
    "contact.eyebrow": "Contact & Location",
    "contact.title": "Find us"
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.menu": "القائمة",
    "nav.specials": "الأطباق المميزة",
    "nav.gallery": "الصور",
    "nav.reviews": "الآراء",
    "nav.contact": "اتصال",
    "nav.reserve": "احجز",
    "hero.eyebrow": "مقهى . مطعم . طوال اليوم",
    "hero.subtitle": "من الفطور إلى العشاء، حيث تلتقي الراحة بالنكهة",
    "hero.book": "احجز طاولة",
    "hero.menu": "اكتشف القائمة",
    "about.eyebrow": "مرحبا بكم في مادينا",
    "about.title": "وجهة مشرقة من الصباح إلى المساء",
    "about.text": "يستقبلكم Madina Cafe & Restaurant طوال اليوم: فطور غني صباحا، سلطات وبيتزا للغداء، أطباق مريحة للعشاء، عصائر طازجة وأجواء تراس هادئة.",
    "menu.eyebrow": "القائمة",
    "menu.title": "قائمة مادينا",
    "menu.text": "أسعار تقريبية بالدرهم، يمكن تعديلها بسهولة في ملف JavaScript.",
    "specials.eyebrow": "تخصصات",
    "specials.title": "أطباق مميزة لا تفوت",
    "gallery.eyebrow": "معرض الصور",
    "gallery.title": "طاولة تفتح الشهية",
    "reviews.eyebrow": "آراء الزبناء",
    "reviews.title": "ما يحبه الزبناء",
    "reservation.eyebrow": "الحجز",
    "reservation.title": "احجز طاولة عبر واتساب",
    "reservation.text": "املأ التفاصيل ثم أرسل طلبك مباشرة إلى مادينا.",
    "contact.eyebrow": "الموقع والاتصال",
    "contact.title": "زورونا"
  }
};

const header = document.getElementById("siteHeader");
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
const menuTabs = document.getElementById("menuTabs");
const menuGrid = document.getElementById("menuGrid");
const testimonialTrack = document.getElementById("testimonialTrack");
const reviewDots = document.getElementById("reviewDots");
const lightbox = document.getElementById("lightbox");
let activeCategory = "all";
let activeReview = 0;
let reviewTimer;

function formatPhone(phone) {
  return `+${phone.slice(0, 3)} ${phone.slice(3, 6)} ${phone.slice(6, 9)} ${phone.slice(9)}`;
}

function buildWhatsAppUrl(message) {
  return `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(message)}`;
}

function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 24);
  document.documentElement.style.setProperty("--parallax", `${window.scrollY * 0.12}px`);
}

function renderMenuTabs() {
  menuTabs.innerHTML = CATEGORIES.map((category) => `
    <button class="menu-tab ${category.id === activeCategory ? "active" : ""}" type="button" data-category="${category.id}">
      <i class="fa-solid ${category.icon}" aria-hidden="true"></i>
      <span>${category.label}</span>
    </button>
  `).join("");
}

function renderMenuItems() {
  const items = activeCategory === "all"
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeCategory);

  menuGrid.innerHTML = items.map((item) => {
    const category = CATEGORIES.find((entry) => entry.id === item.category);
    return `
      <article class="menu-card reveal visible">
        <div class="menu-image">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
        </div>
        <div class="menu-card-body">
          <div class="menu-card-top">
            <h3>${item.name}</h3>
            <span class="price">${item.price} MAD</span>
          </div>
          <p>${item.description}</p>
          <span class="menu-category">${category ? category.label : item.category}</span>
        </div>
      </article>
    `;
  }).join("");
  setupImageFallbacks();
}

function renderReviews() {
  testimonialTrack.innerHTML = REVIEWS.map((review) => `
    <article class="testimonial-card">
      <div class="stars" aria-label="${review.rating} étoiles">${"★".repeat(review.rating)}</div>
      <blockquote>“${review.text}”</blockquote>
      <cite>${review.name}</cite>
    </article>
  `).join("");

  reviewDots.innerHTML = REVIEWS.map((_, index) => `
    <button type="button" class="${index === activeReview ? "active" : ""}" data-review="${index}" aria-label="Afficher l'avis ${index + 1}"></button>
  `).join("");
}

function showReview(index) {
  activeReview = (index + REVIEWS.length) % REVIEWS.length;
  testimonialTrack.style.transform = `translateX(-${activeReview * 100}%)`;
  [...reviewDots.children].forEach((dot, dotIndex) => {
    dot.classList.toggle("active", dotIndex === activeReview);
  });
}

function startReviews() {
  clearInterval(reviewTimer);
  reviewTimer = setInterval(() => showReview(activeReview + 1), 4500);
}

function setupRevealAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  document.querySelectorAll(".reveal").forEach((element) => observer.observe(element));
}

function setupContactInfo() {
  document.getElementById("contactAddress").textContent = CONFIG.address;
  const phoneLink = document.getElementById("contactPhone");
  phoneLink.textContent = formatPhone(CONFIG.phone);
  phoneLink.href = `tel:+${CONFIG.phone}`;

  document.getElementById("openingHours").innerHTML = `
    <h3>Horaires</h3>
    ${CONFIG.hours.map((item) => `<p><span>${item.day}</span><strong>${item.time}</strong></p>`).join("")}
  `;
}

function setupWhatsAppLinks() {
  document.querySelectorAll(".whatsapp-link").forEach((link) => {
    const message = link.dataset.message || "Bonjour Madina, je souhaite réserver une table.";
    link.href = buildWhatsAppUrl(message);
    link.target = "_blank";
    link.rel = "noopener";
  });
}

function setupReservationForm() {
  const form = document.getElementById("reservationForm");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const message = [
      "Bonjour Madina, je souhaite réserver une table.",
      `Nom: ${data.get("name")}`,
      `Téléphone: ${data.get("phone")}`,
      `Date: ${data.get("date")}`,
      `Heure: ${data.get("time")}`,
      `Personnes: ${data.get("guests")}`,
      `Message: ${data.get("message") || "Aucun"}`
    ].join("\n");

    window.open(buildWhatsAppUrl(message), "_blank", "noopener");
  });
}

function setupGallery() {
  document.querySelectorAll(".gallery-item").forEach((button) => {
    button.addEventListener("click", () => {
      const img = button.querySelector("img");
      const lightboxImg = lightbox.querySelector("img");
      lightboxImg.src = button.dataset.full;
      lightboxImg.alt = img.alt;
      lightbox.hidden = false;
    });
  });

  lightbox.addEventListener("click", () => {
    lightbox.hidden = true;
    lightbox.querySelector("img").src = "";
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      lightbox.hidden = true;
      lightbox.querySelector("img").src = "";
    }
  });
}

function setupLanguageSwitch() {
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const lang = button.dataset.lang;
      document.documentElement.lang = lang;
      document.body.classList.toggle("rtl", lang === "ar");
      document.querySelectorAll(".lang-btn").forEach((btn) => btn.classList.toggle("active", btn === button));
      document.querySelectorAll("[data-i18n]").forEach((element) => {
        const key = element.dataset.i18n;
        if (TRANSLATIONS[lang][key]) {
          element.textContent = TRANSLATIONS[lang][key];
        }
      });
    });
  });
}

function setupImageFallbacks() {
  document.querySelectorAll("img").forEach((img) => {
    const applyFallback = () => {
      if (img.alt.includes("Logo")) {
        const fallback = document.createElement("span");
        fallback.className = "logo-fallback";
        fallback.setAttribute("aria-label", img.alt);
        fallback.textContent = "MADINA";
        img.replaceWith(fallback);
        return;
      }

      img.style.background = "linear-gradient(135deg, #0e2a47, #f0a92e)";
      img.style.objectFit = "cover";
      img.style.opacity = "0.92";
    };

    img.addEventListener("error", applyFallback, { once: true });
    if (img.complete && img.naturalWidth === 0) {
      applyFallback();
    }
  });
}

navToggle.addEventListener("click", () => {
  const isOpen = navMenu.classList.toggle("open");
  header.classList.toggle("menu-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

navMenu.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    navMenu.classList.remove("open");
    header.classList.remove("menu-open");
    navToggle.setAttribute("aria-expanded", "false");
  }
});

menuTabs.addEventListener("click", (event) => {
  const button = event.target.closest(".menu-tab");
  if (!button) return;
  activeCategory = button.dataset.category;
  renderMenuTabs();
  renderMenuItems();
});

document.getElementById("prevReview").addEventListener("click", () => {
  showReview(activeReview - 1);
  startReviews();
});

document.getElementById("nextReview").addEventListener("click", () => {
  showReview(activeReview + 1);
  startReviews();
});

reviewDots.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  showReview(Number(button.dataset.review));
  startReviews();
});

window.addEventListener("scroll", updateHeader, { passive: true });

renderMenuTabs();
renderMenuItems();
renderReviews();
showReview(0);
startReviews();
setupRevealAnimations();
setupContactInfo();
setupWhatsAppLinks();
setupReservationForm();
setupGallery();
setupLanguageSwitch();
setupImageFallbacks();
updateHeader();
