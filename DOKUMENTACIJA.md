# Love Little Things - Web Stranica

Kompletna web stranica za "Love Little Things by Kristina" - kompaniju za ručno izrađene proizvode (nakit, setove za posebne prilike, itd.)

## 📋 Struktura Projekta

```
├── src/
│   ├── pages/
│   │   ├── index.astro           # Početna stranica
│   │   ├── katalog.astro         # Katalog proizvoda sa formama
│   │   ├── galerija.astro        # Galerija proizvoda
│   │   ├── kontakt.astro         # Stranica za kontakt i upite
│   │   └── info.astro            # Informacijska stranica
│   └── layouts/
│       └── Layout.astro          # Glavna layout komponenta
├── public/
│   └── styles/
│       └── global.css            # Globalni stilovi
├── astro.config.mjs              # Astro konfiguracija
├── tsconfig.json                 # TypeScript konfiguracija
└── package.json                  # Projekt konfiguracija
```

## 🎨 Stranице

### 1. **Početna Stranica** (`/`)
- Hero sekcija sa pozdravom
- Karakteristike (Handmade, Prilagođeno, Kvalitet)
- Prikaz kategorija proizvoda
- Razlozi za izbor
- Testimonijali od kupaca
- Call-to-action sekcija

### 2. **Katalog** (`/katalog`)
- Prikaz svih kategorija proizvoda:
  - Krsni Setovi
  - Narukvice
  - Nausnice
  - Ogrlice
  - Privjesci
  - Krunice
- Filtriranje po kategorijama
- **Forma za Customization** - Korisnici mogu:
  - Odabrati boju iz palete
  - Odabrati veličinu (S, M, L, One Size)
  - Unijeti specijalne željе i napomene
- **Forma za Upite** - Korisnici mogu:
  - Unijeti svoje podatke (ime, email, telefon)
  - Postaviti pitanja o proizvodu

### 3. **Galerija** (`/galerija`)
- Prikaz proizvoda u grid formatu
- Filter po kategorijama
- Modal za pregled slika
- Statistika (zadovoljni kupci, kreirani proizvodi, ocjene)

### 4. **Kontakt & Upiti** (`/kontakt`)
- Forma za kontakt sa poljima:
  - Ime
  - Email
  - Telefon
  - Tema (Opšte pitanje, Narudžba, Prilagođavanje, Povratna informacija, Drugo)
  - Poruka
  - Pristanak na obradu podataka
- Kontakt informacije
- Radno vrijeme
- Društvene mreže
- **Česta Pitanja (FAQ)** sa accordion dizajnom:
  - Koliko traje dostava?
  - Mogu li vratiti ili zamijeniti proizvod?
  - Kako mogu naručiti prilagođen proizvod?
  - Koji su načini plaćanja dostupni?
  - Koji su materijali korišteni?

### 5. **Info stranica** (`/info`)
- O nama
- Naša priča i misija
- Vrijednosti kompanje
- Šta nudimo
- Proces prilagođavanja
- Korišteni materijali
- Statistika

## 🎨 Design & Karakteristike

- **Boje**: Glavna boja #d63384 (ružičasta)
- **Framework**: Astro 6.1.5
- **CSS Framework**: Bootstrap 5.3.8
- **Icons**: Font Awesome 6.5.0
- **Responsive**: Potpuno responsive na mobilnim uređajima

## 📦 Tehnologije

- **Astro** - Statični site generator
- **Bootstrap** - CSS framework
- **Font Awesome** - Icon library
- **TypeScript** - Type safety

## 🚀 Kako Pokrenuti

1. **Instaliraj dependencies:**
   ```bash
   npm install
   ```

2. **Pokreni development server:**
   ```bash
   npm run dev
   ```
   Server će biti dostupan na `http://localhost:3000`

3. **Build za produkciju:**
   ```bash
   npm run build
   ```

4. **Pregledaj build:**
   ```bash
   npm run preview
   ```

## 📝 Modifikacija Sadržaja

### Dodavanje Novih Proizvoda
U `src/pages/katalog.astro`, izmijenite niz `categories`:
```javascript
const categories = [
    {
        id: 'proizvod-id',
        name: 'Naziv Proizvoda',
        description: 'Opis',
        price: 'Cijena',
    },
    // ... ostali proizvodi
];
```

### Isprava Kontakt Informacija
U `src/pages/kontakt.astro`, ažurirajte kontakt detalje u sekciji "Contact Info".

### Isprava Testimonijala
U `src/pages/index.astro`, izmijenjte niz `testimonials`:
```javascript
const testimonials = [
    { name: 'Ime', text: 'Tekst recenzije', rating: 5 },
];
```

## 🎯 Funkcionalnosti Formi

### Forma za Prilagođavanje (Katalog)
- Dinamički izbor boje sa 6 opcija
- Izbor veličine
- Tekst area za specijalne željе
- Validacija prije slanja

### Forma za Upite (Katalog)
- Validacija email adrese
- Opcioni telefon
- Obavezna poruka
- JavaScript obrada (sprema se u lokalno)

### Forma za Kontakt
- Sve validacije
- Tema za automatsku kategorizaciju
- Pristanak na obradu podataka
- Success/Error poruke

## 💾 Skladištenje Podataka

**NAPOMENA:** Trenutno su sve forme konfigurirane za prikazivanje poruke o uspjehu, ali podaci se ne šalju naServer. Za punu funkcionalnost trebate:

1. Konekcija sa backend-om (e-mail servis ili database)
2. API endpoint-i za obradu formi
3. Email notifikacije za administratora

Za testiranje preporučujem korištenje usluga kao:
- **EmailJS** - Za direktno slanje emaila
- **FormSubmit** - Besplatna forma obrada
- **Netlify Forms** - Ako deploy-ujete na Netlify
- **Vercel** - Ako deploy-ujete na Vercel

## 📱 Responsive Design

Stranica je potpuno responsive sa breakpoint-ima:
- **Mobile**: < 480px
- **Tablet**: 480px - 768px
- **Desktop**: > 768px

## 🔗 Navigacija

- **Navbar** - Dostupan na svim stranicama sa linkovima na sve sekcije
- **Mobile Menu** - Offcanvas menu za mobilne uređaje
- **Footer** - Kontakt informacije i društvene mreže

## 📧 Sljedeći Koraci

1. ✅ Dodajte slike proizvoda u `public/images` folder
2. ⚙️ Konekcija sa email servisom za obrade formi
3. 🎯 SEO optimizacija
4. 📊 Analytics (Google Analytics)
5. 🌐 Deployment (Netlify, Vercel, ili vaš server)

## 📞 Potrebna Podrška

Za dodatne izmjene ili pitanja, ostavite poruku na stranici "Kontakt & Upiti"!
