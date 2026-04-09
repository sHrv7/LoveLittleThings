# 🎀 Love Little Things - Web Stranica

**Kompletna, moderan web sajt za prodaju ručno izrađenih proizvoda**

> Izrađeno sa Astro, Bootstrap, i Font Awesome ✨

---

## 📋 Sadržaj

- [Što je napravljeno?](#što-je-napravljeno)
- [Brzi početak](#brzi-početak)
- [Struktura projekta](#struktura-projekta)
- [Stranice i funkcionalnosti](#stranice-i-funkcionalnosti)
- [Komande](#komande)
- [Dokumentacija](#dokumentacija)

---

## 🎯 Što je napravljeno?

✅ **5 glavnih stranica** sa modernim dizajnom
✅ **3 interaktivne forme** (Customization, Upiti, Kontakt)
✅ **Responsive design** - radi na svim uređajima
✅ **Katalog filtriranja** po kategorijama
✅ **Galerija proizvoda** sa zoom modalima
✅ **FAQ sekcija** sa accordion dizajnom
✅ **Mobile menu** - Offcanvas navigacija
✅ **Font Awesome ikone** - 1700+ ikona dostupno

---

## 🚀 Brzi Početak

### 1. Instaliraj Node.js
Preuzmite sa https://nodejs.org/ (verzija 22 ili novija)

### 2. Instaliraj zavisnosti
```bash
npm install
```

### 3. Pokreni dev server
```bash
npm run dev
```

### 4. Otvori browser
Idi na: http://localhost:3000

---

## 📁 Struktura Projekta

```
src/
├── pages/
│   ├── index.astro        ✨ Početna (/)
│   ├── katalog.astro      🛍️ Katalog sa formama
│   ├── galerija.astro     🖼️ Galerija
│   ├── kontakt.astro      📞 Kontakt + FAQ
│   └── info.astro         ℹ️ Info
└── layouts/
    └── Layout.astro       🎨 Navbar + Footer

public/
├── styles/
│   └── global.css         🎨 Stilovi
└── images/                📸 Slike
```

---

## 📄 Glavne Stranice

### Početna `/`
- Hero sekcija
- Feature-ove (Handmade, Prilagođeno, Kvalitet)
- 6 kategorija proizvoda
- Testimonijali
- CTA dugmadi

### Katalog `/katalog`
- 6 kategorija sa filterom
- **Forma za Customization** - boja, veličina, željе
- **Forma za Upite** - pitanja o proizvodu

### Galerija `/galerija`
- Grid proizvoda
- Filter po kategorijama
- Zoom modali
- Statistika

### Kontakt `/kontakt`
- Kontakt informacije
- **Forma za Kontakt** - ime, email, tema, poruka
- Društvene mreže
- **FAQ** sa accordion-om

### Info `/info`
- O nama
- Misija & Vrijednosti
- Proces narudžbe
- Materijali

---

## 🎨 Dizajn

- **Primarna boja**: #d63384 (Ružičasta)
- **Framework**: Bootstrap 5.3.8
- **Icons**: Font Awesome 6.5.0
- **Responsive**: ✅ Svi uređaji

---

## 🧞 Komande

| Komanda | Akcija |
|---------|--------|
| `npm install` | Instaliraj dependencies |
| `npm run dev` | Dev server (localhost:3000) |
| `npm run build` | Build za produkciju |
| `npm run preview` | Provjeri build |

---

## 📚 Dokumentacija

- **QUICK_START.md** - Brzi početak (5 min)
- **DOKUMENTACIJA.md** - Detaljnu dokumentacija
- **SAZETAK.md** - Što je napravljeno
- **SLIKE_I_ASSETS.md** - Kako koristiti slike

---

## 🚀 Deployment

### Netlify
1. Push na GitHub
2. Kreiraj račun na netlify.com
3. Conectaj GitHub repozitorij
4. Deploy je automatski

### Vercel
1. Push na GitHub
2. Kreiraj račun na vercel.com
3. Import projekta
4. Deploy je automatski

---

## 🎯 Sljedeći Koraci

1. ✅ Projekt je kompletan
2. 📸 Dodaj slike u `public/images/`
3. 🎨 Prilagodi boje ako trebа
4. 💬 Integriraj email servis (EmailJS, FormSubmit)
5. 🚀 Deploy na Netlify ili Vercel

---

**Sada si spreman! Kreni sa `npm install && npm run dev`** 🎉
