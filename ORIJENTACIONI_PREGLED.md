# 🗺️ ORIJENTACIJSKI PREGLED - GDJE JE ŠTA?

## 📍 KOJA STRANICA IDE NA KOJU URL?

```
http://localhost:3000/              → index.astro (POČETNA)
http://localhost:3000/katalog       → katalog.astro (KATALOG)
http://localhost:3000/galerija      → galerija.astro (GALERIJA)
http://localhost:3000/kontakt       → kontakt.astro (KONTAKT)
http://localhost:3000/info          → info.astro (INFO)
```

---

## 📄 ŠTA JE U SVAKOM FAJLU?

### 1️⃣ `src/pages/index.astro` (POČETNA)

**Sekcije:**
```
├── Layout wrapper (navbar, footer)
├── Hero sekcija (gradijent pozadina)
├── Features (3 kartice)
├── Kategorije (6 proizvoda)
├── Zašto nas odabrati (4 kartice)
├── Testimonijali (3 ocjene sa zvjezdicama)
└── Call-to-action (2 dugmeta)
```

**Što trebam znati:**
- `const products` - 6 kategorija proizvoda
- `const testimonials` - 3 ocjene od kupaca
- Hexa boja: #d63384

---

### 2️⃣ `src/pages/katalog.astro` (KATALOG + FORME)

**Sekcije:**
```
├── Filter dugmadi (7 dugmadi)
├── Products grid (kartice sa cijenama)
│   ├── 🎨 "PRILAGODI" dugme → Otvara CUSTOMIZATION MODAL
│   └── 💬 "UPIT" dugme → Otvara INQUIRY MODAL
├── 🎨 CUSTOMIZATION MODAL
│   ├── Color picker (6 boja)
│   ├── Size selector (S, M, L, One Size)
│   ├── Textarea za željе
│   └── Submit dugme
└── 💬 INQUIRY MODAL
    ├── Ime, Email, Telefon
    ├── Poruka o upitu
    └── Submit dugme
```

**JavaScript:**
- `openCustomizationModal()` - Otvori modal
- `closeCustomizationModal()` - Zatvorи modal
- `openInquiryModal()` - Otvori modal
- `closeInquiryModal()` - Zatvorи modal
- Filter funkcionlnost

**Što trebam znati:**
- `const categories` - 6 proizvoda sa id, name, price
- Boje: #d63384 (ružičasta), #FFB6D9, itd.

---

### 3️⃣ `src/pages/galerija.astro` (GALERIJA)

**Sekcije:**
```
├── Filter dugmadi (7 dugmadi)
├── Gallery grid (8 proizvoda)
├── Hover efekti sa zoom icon-om
├── Modal za zoom slike
├── Statistika (500+ kupaca, 1000+ proizvodi, 5★)
└── CTA linkovi (Naruči, Kontaktiraj)
```

**JavaScript:**
- Filter funkcionlnost
- Image preview modali

**Što trebam znati:**
- `const galleryImages` - 8 produkata za prikaz

---

### 4️⃣ `src/pages/kontakt.astro` (KONTAKT + FAQ)

**Sekcije:**
```
├── Kontakt informacije (4 kartice)
│   ├── Lokacija
│   ├── Telefon
│   ├── Email
│   └── Radno vrijeme
├── 📧 FORMA ZA KONTAKT
│   ├── Ime, Email, Telefon
│   ├── Tema (select sa 5 opcija)
│   ├── Poruka
│   ├── Pristanak checkbox
│   └── Submit sa Success/Error porukama
├── Društvene mreže (4 ikone sa linkovima)
└── ❓ ČESTA PITANJA (FAQ)
    ├── Accordion sa 5 pitanja
    └── Svako pitanje ima odgovor
```

**JavaScript:**
- `handleContactSubmit()` - Obrada forme
- Validacija inputa
- Success/Error poruke

**Što trebam znati:**
- Kontakt email trebam podesiti
- FAQ pitanja trebam prilagoditi prema potrebama

---

### 5️⃣ `src/pages/info.astro` (INFO)

**Sekcije:**
```
├── O nama (priča kompanije)
├── Misija, Vrijednosti, Obaveza (3 kartice)
├── Šta nudimo (3 kartice sa ikonama)
├── Proces prilagođavanja (4 koraka sa brojevima)
├── Korišteni materijali (4 karakteristike)
└── Call-to-action
```

**Što trebam znati:**
- Svi tekstovi trebaju biti personalizirani

---

### 🎨 `src/layouts/Layout.astro` (NAVBAR + FOOTER)

**Komponente:**
```
├── HTML HEAD
│   ├── Meta tagovi
│   ├── Bootstrap link
│   ├── Font Awesome link
│   └── Global CSS link
├── NAVBAR
│   ├── Logo + Brand
│   ├── Mobile menu toggle
│   └── Navigation linkovi (5 linkova)
├── MAIN (slot za stranicu)
└── FOOTER
    ├── Copyright
    ├── Društvene mreže (4 ikone)
    └── Kontakt info
```

**Što trebam znati:**
- Linkovi su hardcoded (sve ide na /path)
- Footer se ponavalja na svim stranicama
- Navbar je uvijek na vrhu

---

### 🎨 `public/styles/global.css` (CSS)

**Što je pokriveno:**
```
├── General stilovi (*, body, main)
├── Hero sekcija (.hero-section)
├── Item kartice (.item-link, .product-card)
├── Modal stilovi (.modal, .modal-content)
├── Forme (.contact-form, .inquiry-form)
├── Galerija (.gallery-grid, .gallery-item)
├── Info kartice (.info-card)
├── Responsive media queries
└── Utilities (text, spacing, colors)
```

**Boje:**
- Primarna: #d63384
- Pozadina: #f9f9f9, #f0f0f0
- Borders: #ddd
- Text: #333, #6c757d

---

## 🔗 KAK LINKOVI RADE?

```
Na bilo kojoj stranici:

├── Logo → /              (Početna)
├── Početna → /           (Početna)
├── Katalog → /katalog    (Katalog)
├── Galerija → /galerija  (Galerija)
├── Kontakt → /kontakt    (Kontakt)
└── Info → /info          (Info)
```

---

## 📝 GDJE TREBAM PROMIJENITI TEKST?

### Tekst "Početna stranica"
- **Fajl**: `src/pages/index.astro`
- **Redak**: ~ linija 35-45
- **Koji tekst**: Hero sekcija naslov, paragraf

### Tekst "Katalog"
- **Fajl**: `src/pages/katalog.astro`
- **Redak**: ~ linija 30-50
- **Što promijeniti**: Category names, descriptions, prices

### Tekst "Info"
- **Fajl**: `src/pages/info.astro`
- **Redak**: ~ linija 100+
- **Što promijeniti**: About sekcija, proces, materijali

### Tekst "Kontakt"
- **Fajl**: `src/pages/kontakt.astro`
- **Redak**: ~ linija 30-50
- **Što promijeniti**: Lokacija, telefon, email, radno vrijeme

---

## 🎨 GDJE TREBAM PROMIJENITI BOJE?

### Primarna boja (#d63384)
- **Fajl**: `public/styles/global.css`
- **Koliko puta**: 50+ mjesta
- **Kako**: Find & Replace `#d63384` sa novom bojom

### Gradijent
- **Fajlovi**: `index.astro`, `kontakt.astro`, `galerija.astro`
- **Gdje**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Promijeni**: `#667eea` i `#764ba2`

---

## 📸 GDJE TREBAM DODATI SLIKE?

### Logo
- **Lokacija**: `public/images/logo.jpg`
- **Korišteno**: Na svim stranicama (navbar)
- **Veličina**: 38px x 38px (u kodu)

### Hero slike
- **Lokacija**: `public/images/hero/`
- **Korišteno**: Hero sekcije
- **Veličina**: 1920x400px

### Product slike
- **Lokacija**: `public/images/products/[kategorija]/`
- **Korišteno**: Katalog, galerija
- **Veličina**: 300x300px - 600x600px

---

## 🔧 GDJE SU FORME?

### 1. Forma za Customization (Katalog)
- **Fajl**: `src/pages/katalog.astro`
- **Redak**: ~ linija 120-180
- **ID**: `#customizationForm`
- **Handler**: `submitCustomization(event)`

### 2. Forma za Upite (Katalog)
- **Fajl**: `src/pages/katalog.astro`
- **Redak**: ~ linija 180-240
- **ID**: `#inquiryForm`
- **Handler**: `submitInquiry(event)`

### 3. Forma za Kontakt
- **Fajl**: `src/pages/kontakt.astro`
- **Redak**: ~ linija 50-120
- **ID**: `#contactForm`
- **Handler**: `handleContactSubmit(event)`

---

## 🚨 ŠTO TREBAM OBAVEZNO ZNATI?

1. **Astro koristi `---` separator** za JavaScript dio
2. **Sve boje trebaju biti `#xxxxxx` format**
3. **Linkovi trebaju biti `/path` format**
4. **Forme moraju biti integrirane sa email servisom**
5. **Slike trebaju biti u `public/images/`**
6. **Mobile menu koristi Bootstrap offcanvas**
7. **Icons su Font Awesome (i class)**

---

## 🎯 CHECKLIST ZA PRILAGOĐAVANJE

- [ ] Promijenio sam sve tekstove
- [ ] Dodao sam logo
- [ ] Dodao sam slike za proizvode
- [ ] Promijenio sam boje ako trebау
- [ ] Podesio sam kontakt informacije
- [ ] Dodao sam Facebook/Instagram linkove
- [ ] Integriram email servis
- [ ] Testeriram sve forme
- [ ] Deploy-ao sam na Netlify/Vercel

---

**Sada si spreman! Pregledaj dokumentaciju i kreni sa prilagođavanjem!** ✨
