# 🚀 QUICK START GUIDE

## Što trebate znati?

### Dijelovi stranice

```
Početna stranica (/) ────→ Poziva na akciju
        ↓
Katalog (/katalog) ─────→ Pregled proizvoda
        ├── Forma za Customization (boja, veličina, željе)
        └── Forma za Upite (pitanja o proizvodu)
        ↓
Galerija (/galerija) ───→ Prikaz proizvoda sa filterom
        ↓
Kontakt (/kontakt) ─────→ Kontakt forma + FAQ
        ↓
Info (/info) ───────────→ O nama + proces narudžbe
```

---

## 💻 INSTALACIJA I POKRETANJE

### Korak 1: Instalacija Node.js
1. Preuzmi sa https://nodejs.org/
2. Instaliraj sa default postavkama
3. Otvori Terminal u projektu

### Korak 2: Instaliraj Astro
```bash
cd d:\Projects\lltBetter
npm install
```

### Korak 3: Pokreni dev server
```bash
npm run dev
```

### Korak 4: Otvori u browser-u
```
http://localhost:3000
```

---

## 📝 KAKO DODATI NOVE PROIZVODE

### Primjer: Dodavanje nove kategorije u katalog

**Datoteka:** `src/pages/katalog.astro`

**Pronađi ovaj dio (red ~7):**
```javascript
const categories = [
    {
        id: 'krsni-setovi',
        name: 'Krsni Setovi',
        description: 'Kompletni setovi za krštenja',
        price: '45-80 KM',
    },
    // ... ostali proizvodi
];
```

**Dodaj novi proizvod:**
```javascript
{
    id: 'novi-proizvod',           // ID bez razmaka - koristi za linkove
    name: 'Naziv Proizvoda',       // Prikaži naziv
    description: 'Opis proizvoda', // Kratko opisane
    price: 'Cijena KM',            // Cijena dijapazona
},
```

---

## 🌟 KAKO DODATI OCJENU (TESTIMONIJAL)

**Datoteka:** `src/pages/index.astro`

**Pronađi ovaj dio (red ~12):**
```javascript
const testimonials = [
    { name: 'Marija', text: 'Prekrasni proizvodi...', rating: 5 },
    // ... ostale ocjene
];
```

**Dodaj novu ocjenu:**
```javascript
{ 
    name: 'Ime',                    // Ime osobe
    text: 'Šta kaze osoba',         // Recenzija tekst
    rating: 5                       // Broj zvjezdica (1-5)
},
```

---

## 🎨 KAKO PROMIJENITI BOJE

### Primarnu boju (#d63384 = ružičasta)

**Gdje se koristi:**
- Naslovi
- Dugmadi
- Ikone
- Linkovi

**Gdje promijeniti:**
1. `public/styles/global.css` - Pronađi `#d63384` i zamijeni novom bojom
2. Primjer novih boja:
   - Crvena: `#FF6B6B`
   - Plava: `#4ECDC4`
   - Zelena: `#95E1D3`

### Gradijent boje na hero sekciji

**Datoteka:** `src/pages/index.astro` (red ~20)

```javascript
style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);"
```

Promijeni brojeve:
- `#667eea` - Prva boja
- `#764ba2` - Druga boja

---

## 📧 INTEGRACIJA EMAIL SERVISA (EmailJS primjer)

### Što trebate?

EmailJS omogućava slanje emaila direktno iz browser-a bez backend-a.

### Korak 1: Registracija
1. Idi na https://www.emailjs.com/
2. Kreiraj besplatan račun
3. Konektiraj Gmail ili drugu email adresu
4. Kopiraj **Service ID**, **Template ID**, **Public Key**

### Korak 2: Dodaj EmailJS u HTML head

**Datoteka:** `src/layouts/Layout.astro`

Dodaj prije `</head>` taga:
```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3.11.0/dist/index.min.js"></script>
```

### Korak 3: Inicijalizacija u formi

**Datoteka:** `src/pages/kontakt.astro`

Dodaj u `<script>` dio:
```javascript
// Inicijalizuj EmailJS
emailjs.init("YOUR_PUBLIC_KEY"); // Zamijeni sa tvojim Public Key

function handleContactSubmit(event) {
    event.preventDefault();
    
    const templateParams = {
        from_name: document.getElementById('contactName').value,
        from_email: document.getElementById('contactEmail').value,
        phone: document.getElementById('contactPhone').value,
        subject: document.getElementById('contactSubject').value,
        message: document.getElementById('contactMessage').value,
    };
    
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
        .then((response) => {
            document.getElementById('successMessage').style.display = '';
            document.getElementById('contactForm').reset();
        })
        .catch((error) => {
            document.getElementById('errorMessage').style.display = '';
        });
}
```

---

## 📱 KAKO DODATI SLIKE

### 1. Mobilne slike (portrait)
```
public/images/produkti/
├── nausnice-1.jpg
├── nausnice-2.jpg
└── ...
```

### 2. Hero slike
```
public/images/
├── hero-1.jpg
├── hero-2.jpg
└── ...
```

### 3. Logo
```
public/images/
└── logo.jpg
```

### Korištenje slike u kodu:

```html
<img src="/images/logo.jpg" alt="Logo" />
```

---

## 🎯 BUILD ZA PRODUKCIJU

### Kreiraj final verziju:
```bash
npm run build
```

### Provjeri prije deployanja:
```bash
npm run preview
```

### Output će biti u:
```
dist/
```

Ovaj `dist/` folder možeš uploadati na web server.

---

## 🌐 DEPLOYMENT OPCIJE

### Opcija 1: Netlify (PREPORUČENO)
1. Kreiraj račun na https://app.netlify.com/
2. Conectaj GitHub repozitorij
3. Netifier će automatski buildati i deployati

### Opcija 2: Vercel
1. Kreiraj račun na https://vercel.com/
2. Conectaj GitHub repozitorij
3. Deploy automatski

### Opcija 3: Vlastiti server
1. Preslaj `dist/` folder na server
2. Pokreni sa Nginx ili Apache

---

## 🔍 常見問題 (FAQ)

### - Greška: "npm: command not found"
**Rješenje:** Instaliraj Node.js sa https://nodejs.org/

### - Greška: "Port 3000 je zauzet"
**Rješenje:** Koristi drugi port:
```bash
npm run dev -- --port 3001
```

### - Kako promijeniti naslov stranice?
**Odgovori:** Edit `<title>` tag u svakoj `.astro` datoteci

### - Kako dodati meta description?
**Odgovori:** Dodaj u `Layout.astro`:
```html
<meta name="description" content="Tvoj opis...">
```

---

## 📚 DATOTEKE KOJE TREBA ZNATI

```
src/pages/
├── index.astro          ← POČETNA STRANICA
├── katalog.astro        ← KATALOG + FORME
├── galerija.astro       ← GALERIJA
├── kontakt.astro        ← KONTAKT + FAQ
└── info.astro           ← INFO

src/layouts/
└── Layout.astro         ← Navbar, Footer, Meta

public/styles/
└── global.css           ← SVI STILOVI

public/images/
└── (TVOJE SLIKE)
```

---

## 💡 PRO SAVJETI

1. **Koristi Prettier** za formatiranje koda
2. **Isprobaj u realnom uređaju** prije deployanja
3. **Testiraj sve forme** sa fake-om podataka
4. **Provjeri Performance** sa Google Lighthouse
5. **Prilagodi boje** prema brandu

---

## 📞 PODRŠKA

Ako nešto ne radi:
1. Provjeri konzolu (F12 → Console tab)
2. Provjeri `README.md` i `DOKUMENTACIJA.md`
3. Pokreni `npm install` ponovno
4. Provjeri internet konekciju

---

**Sada si spreman za start! 🎉**
