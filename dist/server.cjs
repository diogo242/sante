var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var XOF_TO_SATS = 1.666;
var HOSPITALS_DB = [
  {
    id: "hz-calavi",
    name: "H\xF4pital de Zone d'Abomey-Calavi & S\xF4-Ava",
    type: "public",
    image: "https://images.unsplash.com/photo-1587351021355-a479a299d2f9?auto=format&fit=crop&q=80&w=600",
    rating: 4.3,
    reviewsCount: 142,
    distance: "1.2 km",
    address: "Rue de l'H\xF4pital de Zone, Quartier S\xE8m\xE8-Podji, Abomey-Calavi",
    phone: "+229 21 36 01 22",
    hours: "Ouvert 24h/24",
    isVerified: true,
    services: ["Urgences", "P\xE9diatrie", "Maternit\xE9", "Chirurgie", "M\xE9decine G\xE9n\xE9rale"],
    priceList: [
      { name: "Consultation M\xE9decine G\xE9n\xE9rale", priceXOF: 2e3, priceSats: 3330 },
      { name: "Bilan NFS / Sanguin Complet", priceXOF: 4500, priceSats: 7500 },
      { name: "Test Rapide Paludisme (GE)", priceXOF: 1500, priceSats: 2500 },
      { name: "\xC9chographie Obst\xE9tricale", priceXOF: 8e3, priceSats: 13320 },
      { name: "Ordonnance Traitement Paludisme type", priceXOF: 3500, priceSats: 5830 }
    ],
    reviews: [
      { id: "r1", author: "Pascal Houessou", rating: 5, date: "25 Juin 2026", comment: "Le service de p\xE9diatrie est exceptionnel. Prise en charge tr\xE8s rapide pour mon fils." },
      { id: "r2", author: "Marielle Tossou", rating: 4, date: "12 Juin 2026", comment: "L'h\xF4pital public de r\xE9f\xE9rence \xE0 Calavi. Parfois un peu d'attente aux urgences, mais les m\xE9decins sont tr\xE8s comp\xE9tents." },
      { id: "r3", author: "Gaston Hound\xE9ton", rating: 4, date: "03 Juin 2026", comment: "Propre et bien organis\xE9 depuis la mise en place du paiement num\xE9rique. Pas de files d'attente interminables." }
    ],
    coords: { x: 48, y: 52 },
    lat: 6.4385,
    lng: 2.3412
  },
  {
    id: "chd-atlantique",
    name: "CHD Atlantique (H\xF4pital Universitaire)",
    type: "public",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
    rating: 4.5,
    reviewsCount: 238,
    distance: "2.4 km",
    address: "Route Inter-\xC9tats, Pr\xE8s du Campus Universitaire d'Abomey-Calavi (UAC)",
    phone: "+229 21 36 12 44",
    hours: "Ouvert 24h/24",
    isVerified: true,
    services: ["Urgences", "Cardiologie", "Radiologie", "Gyn\xE9cologie", "Laboratoire d'analyses"],
    priceList: [
      { name: "Consultation Sp\xE9cialiste", priceXOF: 5e3, priceSats: 8330 },
      { name: "Radiographie Thoracique", priceXOF: 1e4, priceSats: 16660 },
      { name: "Bilan Lipidique & Glyc\xE9mie", priceXOF: 6e3, priceSats: 1e4 },
      { name: "Scanner C\xE9r\xE9bral", priceXOF: 45e3, priceSats: 75e3 }
    ],
    reviews: [
      { id: "r4", author: "Chantal Agon", rating: 5, date: "18 Juin 2026", comment: "\xC9quipements de pointe et professeurs tr\xE8s \xE0 l'\xE9coute. Tr\xE8s bon suivi gyn\xE9cologique." },
      { id: "r5", author: "Christian Soglo", rating: 4, date: "10 Juin 2026", comment: "Situ\xE9 juste \xE0 c\xF4t\xE9 de l'UAC. Pratique pour les \xE9tudiants et les habitants de Calavi." }
    ],
    coords: { x: 32, y: 38 },
    lat: 6.4182,
    lng: 2.3395
  },
  {
    id: "clinique-sainte-famille",
    name: "Clinique Priv\xE9e Sainte-Famille",
    type: "private",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=600",
    rating: 4.7,
    reviewsCount: 85,
    distance: "3.8 km",
    address: "Quartier Zogbadj\xE8, Face 2\xE8me entr\xE9e du Campus, Abomey-Calavi",
    phone: "+229 97 45 11 89",
    hours: "07:00 - 22:00",
    isVerified: true,
    services: ["M\xE9decine G\xE9n\xE9rale", "Maternit\xE9", "P\xE9diatrie", "Dentisterie", "\xC9chographie"],
    priceList: [
      { name: "Consultation G\xE9n\xE9rale", priceXOF: 3e3, priceSats: 5e3 },
      { name: "Consultation Dentaire", priceXOF: 5e3, priceSats: 8330 },
      { name: "D\xE9tartrage & Soins", priceXOF: 15e3, priceSats: 25e3 },
      { name: "\xC9chographie Pelvienne", priceXOF: 1e4, priceSats: 16660 }
    ],
    reviews: [
      { id: "r6", author: "Bienvenue Segnon", rating: 5, date: "29 Juin 2026", comment: "Le cadre est magnifique et d'une propret\xE9 impeccable. Service client tr\xE8s r\xE9actif." },
      { id: "r7", author: "F\xE9licit\xE9 Kpod\xE9kon", rating: 4, date: "21 Juin 2026", comment: "Clinique priv\xE9e excellente. Les tarifs sont un peu plus \xE9lev\xE9s mais le confort et l'accueil le justifient largement." }
    ],
    coords: { x: 58, y: 28 },
    lat: 6.4255,
    lng: 2.3298
  },
  {
    id: "cs-calavi-centre",
    name: "Centre de Sant\xE9 de Calavi-Centre",
    type: "clinic",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
    rating: 3.9,
    reviewsCount: 56,
    distance: "0.8 km",
    address: "Avenue de la Mairie, En face de l'H\xF4tel de Ville, Abomey-Calavi",
    phone: "+229 21 36 04 11",
    hours: "08:00 - 18:00",
    isVerified: false,
    services: ["Vaccination", "Planification Familiale", "Consultation Pr\xE9natale", "Soins Infirmiers"],
    priceList: [
      { name: "Consultation Infirmi\xE8re", priceXOF: 1e3, priceSats: 1660 },
      { name: "Pansement & Injection", priceXOF: 800, priceSats: 1330 },
      { name: "Carnet de Sant\xE9 & Pes\xE9e", priceXOF: 500, priceSats: 830 }
    ],
    reviews: [
      { id: "r8", author: "Ablavi Hounkp\xE8", rating: 4, date: "14 Juin 2026", comment: "Centre public id\xE9al pour les vaccins et suivis de b\xE9b\xE9. Tr\xE8s abordable." }
    ],
    coords: { x: 44, y: 68 },
    lat: 6.4452,
    lng: 2.3478
  },
  {
    id: "clinique-solidarite",
    name: "Clinique de la Solidarit\xE9 (Bidossessi)",
    type: "private",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=600",
    rating: 4.2,
    reviewsCount: 42,
    distance: "1.9 km",
    address: "Bidossessi, \xE0 200m du Carrefour Kpota, Abomey-Calavi",
    phone: "+229 95 33 22 11",
    hours: "08:00 - 20:00",
    isVerified: true,
    services: ["M\xE9decine G\xE9n\xE9rale", "Petite Chirurgie", "Analyses M\xE9dicales", "Pharmacie de garde"],
    priceList: [
      { name: "Consultation de Jour", priceXOF: 2500, priceSats: 4160 },
      { name: "Consultation d'Urgence / Nuit", priceXOF: 5e3, priceSats: 8330 },
      { name: "Analyse d'Urine (ECBU)", "priceXOF": 4e3, "priceSats": 6660 },
      { name: "Suture de Plaie Simple", "priceXOF": 6e3, "priceSats": 1e4 }
    ],
    reviews: [
      { id: "r9", author: "Marc Djivo", rating: 4, date: "26 Mai 2026", comment: "Clinique de quartier s\xE9rieuse. Prise en charge imm\xE9diate pour les petites urgences." }
    ],
    coords: { x: 74, y: 48 },
    lat: 6.452,
    lng: 2.3595
  }
];
var APPOINTMENTS_DB = [
  {
    id: "apt-821",
    hospitalId: "hz-calavi",
    hospitalName: "H\xF4pital de Zone d'Abomey-Calavi & S\xF4-Ava",
    date: "2026-07-02",
    timeSlot: "10:30",
    patientName: "Bienvenue Segnon",
    status: "confirmed"
  }
];
var INVOICES_DB = [
  {
    id: "FACT-392817",
    patientName: "Bienvenue Segnon",
    patientPhone: "+229 97 88 55 44",
    hospitalName: "CHD Atlantique (H\xF4pital Universitaire)",
    hospitalAddress: "Route Inter-\xC9tats, Pr\xE8s du Campus Universitaire d'Abomey-Calavi (UAC)",
    date: "20 Juin 2026 \xE0 10:45",
    items: [
      { name: "Consultation Sp\xE9cialiste", priceXOF: 5e3 },
      { name: "Test Rapide Paludisme (GE)", priceXOF: 1500 }
    ],
    totalXOF: 6500,
    totalSats: 10790,
    paymentMethod: "Wallet",
    txHash: "tx_benin_0x5c7f763ab21e3f890ad678ec4532bce78d8fe0192",
    isPaid: true,
    doctorName: "Dr. Jean Sossou"
  }
];
var LIGHTNING_INVOICES_DB = {};
var ACCESS_REQUESTS_DB = [
  {
    id: "req-1",
    npi: "1097885544901",
    doctorEmail: "dr.sossou@sante.bj",
    hospitalName: "CHD Atlantique (H\xF4pital Universitaire)",
    status: "pending",
    requestedAt: "30/06/2026 \xE0 08:15"
  }
];
var PATIENTS_DB = {
  "bienvenuesegnon@gmail.com": {
    name: "Bienvenue Segnon",
    email: "bienvenuesegnon@gmail.com",
    phone: "+229 97 88 55 44",
    walletBalance: 15e3,
    npi: "1097885544901",
    avatar: "BS"
  },
  "alice.dovonou@gmail.com": {
    name: "Alice Dovonou",
    email: "alice.dovonou@gmail.com",
    phone: "+229 95 34 12 78",
    walletBalance: 45e3,
    npi: "2095341278102",
    avatar: "AD"
  }
};
var HOSPITAL_USERS_DB = [
  {
    email: "admin@sante.bj",
    password: "123456",
    hospitalId: "system-admin",
    role: "admin",
    name: "Administrateur National"
  },
  {
    email: "dr.sossou@sante.bj",
    password: "123456",
    hospitalId: "chd-atlantique",
    role: "doctor",
    name: "Dr. Jean Sossou"
  },
  {
    email: "sonia.gbaguidi@sante.bj",
    password: "123456",
    hospitalId: "hz-calavi",
    role: "admin",
    name: "Sonia Gbaguidi"
  }
];
async function startServer() {
  const app = (0, import_express.default)();
  const PORT = 3e3;
  app.use(import_express.default.json());
  app.get("/api/hospitals", (req, res) => {
    res.json(HOSPITALS_DB);
  });
  app.post("/api/hospitals/register", (req, res) => {
    const { name, type, address, phone, hours, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Le nom, l'email et le mot de passe sont requis." });
    }
    const normalizedEmail = email.toLowerCase().trim();
    const userExists = HOSPITAL_USERS_DB.some((u) => u.email === normalizedEmail);
    if (userExists) {
      return res.status(400).json({ error: "Cet email est d\xE9j\xE0 associ\xE9 \xE0 un compte professionnel." });
    }
    const hospitalId = `hosp-${Date.now()}`;
    const newHospital = {
      id: hospitalId,
      name,
      type: type || "clinic",
      image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=600",
      rating: 5,
      reviewsCount: 0,
      distance: `${(1 + Math.random() * 5).toFixed(1)} km`,
      address: address || "Abomey-Calavi Centre, B\xE9nin",
      phone: phone || "+229 97 00 00 00",
      hours: hours || "Ouvert 24h/24",
      isVerified: false,
      // Must be verified by Super Admin
      services: ["M\xE9decine G\xE9n\xE9rale", "Consultations", "Urgences"],
      priceList: [
        { name: "Consultation M\xE9decine G\xE9n\xE9rale", priceXOF: 2e3, priceSats: 3330 },
        { name: "Soin Ambulatoire Simple", priceXOF: 1e3, priceSats: 1660 }
      ],
      reviews: [],
      coords: { x: 40 + Math.random() * 30, y: 30 + Math.random() * 30 },
      lat: 6.4385 + (Math.random() - 0.5) * 0.05,
      lng: 2.3412 + (Math.random() - 0.5) * 0.05
    };
    HOSPITALS_DB.push(newHospital);
    HOSPITAL_USERS_DB.push({
      email: normalizedEmail,
      password,
      hospitalId,
      role: "admin",
      name: `Admin ${name}`
    });
    res.status(201).json({
      success: true,
      message: "Demande de cr\xE9ation d'h\xF4pital enregistr\xE9e avec succ\xE8s. Votre \xE9tablissement est en attente de confirmation par le Super Administrateur Sant\xE9+."
    });
  });
  app.post("/api/hospitals/add", (req, res) => {
    const { name, type, address, phone, hours, email, password } = req.body;
    if (!name) {
      return res.status(400).json({ error: "Le nom de l'h\xF4pital est requis." });
    }
    const hospitalId = `hosp-${Date.now()}`;
    const newHospital = {
      id: hospitalId,
      name,
      type: type || "clinic",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=600",
      rating: 5,
      reviewsCount: 0,
      distance: `${(1 + Math.random() * 4).toFixed(1)} km`,
      address: address || "Abomey-Calavi Centre, B\xE9nin",
      phone: phone || "+229 97 00 00 00",
      hours: hours || "Ouvert 24h/24",
      isVerified: true,
      // Immediately verified
      services: ["M\xE9decine G\xE9n\xE9rale", "Consultations", "Urgences"],
      priceList: [
        { name: "Consultation M\xE9decine G\xE9n\xE9rale", priceXOF: 2e3, priceSats: 3330 },
        { name: "Soin Ambulatoire Simple", priceXOF: 1e3, priceSats: 1660 }
      ],
      reviews: [],
      coords: { x: 30 + Math.random() * 40, y: 30 + Math.random() * 40 },
      lat: 6.4385 + (Math.random() - 0.5) * 0.04,
      lng: 2.3412 + (Math.random() - 0.5) * 0.04
    };
    HOSPITALS_DB.push(newHospital);
    if (email && password) {
      HOSPITAL_USERS_DB.push({
        email: email.toLowerCase().trim(),
        password,
        hospitalId,
        role: "admin",
        name: `Admin ${name}`
      });
    }
    res.status(201).json({ success: true, hospital: newHospital });
  });
  app.patch("/api/hospitals/:id/verify", (req, res) => {
    const { id } = req.params;
    const hospital = HOSPITALS_DB.find((h) => h.id === id);
    if (!hospital) {
      return res.status(404).json({ error: "\xC9tablissement non trouv\xE9" });
    }
    hospital.isVerified = true;
    res.json({ success: true, hospital });
  });
  app.post("/api/hospital-users/login", (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "L'email et le mot de passe sont requis." });
    }
    const normalizedEmail = email.toLowerCase().trim();
    const user = HOSPITAL_USERS_DB.find((u) => u.email === normalizedEmail && u.password === password);
    if (!user) {
      return res.status(401).json({ error: "Identifiants incorrects." });
    }
    if (user.hospitalId !== "system-admin") {
      const hospital = HOSPITALS_DB.find((h) => h.id === user.hospitalId);
      if (hospital && !hospital.isVerified) {
        return res.status(403).json({
          error: "Votre \xE9tablissement est en attente de confirmation par le Super Administrateur Sant\xE9+."
        });
      }
    }
    res.json({
      email: user.email,
      hospitalId: user.hospitalId,
      role: user.role,
      name: user.name
    });
  });
  app.post("/api/hospitals/:id/reviews", (req, res) => {
    const hospitalId = req.params.id;
    const { author, rating, comment } = req.body;
    const hospital = HOSPITALS_DB.find((h) => h.id === hospitalId);
    if (!hospital) {
      return res.status(404).json({ error: "H\xF4pital non trouv\xE9" });
    }
    const newReview = {
      id: `rev-${Math.floor(1e3 + Math.random() * 9e3)}`,
      author: author || "Citoyen Anonyme",
      rating: Number(rating) || 5,
      date: (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR"),
      comment: comment || ""
    };
    hospital.reviews.push(newReview);
    const totalRating = hospital.reviews.reduce((sum, r) => sum + r.rating, 0);
    hospital.rating = Number((totalRating / hospital.reviews.length).toFixed(1));
    hospital.reviewsCount = hospital.reviews.length;
    res.json(newReview);
  });
  app.get("/api/appointments", (req, res) => {
    res.json(APPOINTMENTS_DB);
  });
  app.post("/api/appointments", (req, res) => {
    const { hospitalId, hospitalName, date, timeSlot, patientName } = req.body;
    const newAppointment = {
      id: `apt-${Math.floor(100 + Math.random() * 900)}`,
      hospitalId,
      hospitalName,
      date,
      timeSlot,
      patientName,
      status: "confirmed"
    };
    APPOINTMENTS_DB.push(newAppointment);
    res.status(201).json(newAppointment);
  });
  app.delete("/api/appointments/:id", (req, res) => {
    const { id } = req.params;
    const initialLength = APPOINTMENTS_DB.length;
    APPOINTMENTS_DB = APPOINTMENTS_DB.filter((apt) => apt.id !== id);
    if (APPOINTMENTS_DB.length === initialLength) {
      return res.status(404).json({ error: "Rendez-vous introuvable" });
    }
    res.json({ success: true, message: "Rendez-vous annul\xE9 avec succ\xE8s" });
  });
  app.post("/api/wallet/patients", (req, res) => {
    const { email, name, phone, npi, walletBalance } = req.body;
    if (!email) {
      return res.status(400).json({ error: "L'email est requis." });
    }
    const normalizedEmail = email.toLowerCase().trim();
    PATIENTS_DB[normalizedEmail] = {
      name: name || normalizedEmail.split("@")[0].replace(".", " "),
      email: normalizedEmail,
      phone: phone || "+229 97 00 00 00",
      walletBalance: Number(walletBalance) !== void 0 ? Number(walletBalance) : 15e3,
      npi: npi || `10${Math.floor(1e10 + Math.random() * 9e10)}`,
      avatar: (name || normalizedEmail).substring(0, 2).toUpperCase()
    };
    res.json(PATIENTS_DB[normalizedEmail]);
  });
  app.get("/api/wallet/patients/:email", (req, res) => {
    const { email } = req.params;
    const normalizedEmail = email.toLowerCase().trim();
    if (!PATIENTS_DB[normalizedEmail]) {
      PATIENTS_DB[normalizedEmail] = {
        name: normalizedEmail.split("@")[0].replace(".", " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        email: normalizedEmail,
        phone: "+229 97 00 00 00",
        walletBalance: 1e4,
        npi: `10${Math.floor(1e10 + Math.random() * 9e10)}`,
        avatar: normalizedEmail.substring(0, 2).toUpperCase()
      };
    }
    res.json(PATIENTS_DB[normalizedEmail]);
  });
  app.post("/api/wallet/patients/:email/deposit", (req, res) => {
    const { email } = req.params;
    const { amountXOF, operator, phoneNumber } = req.body;
    const normalizedEmail = email.toLowerCase().trim();
    const patient = PATIENTS_DB[normalizedEmail];
    if (!patient) {
      return res.status(404).json({ error: "Citoyen non trouv\xE9" });
    }
    if (!amountXOF || amountXOF <= 0) {
      return res.status(400).json({ error: "Montant de recharge invalide" });
    }
    const requestedAmount = Number(amountXOF);
    if (operator === "mtn" || operator === "moov") {
      console.log(`[Izichange API] Initializing merchant payment intent for ${operator.toUpperCase()}...`);
      console.log(`[Izichange API] Phone: ${phoneNumber}, Amount: ${requestedAmount} XOF`);
      const izichangePayload = {
        merchant_id: process.env.IZICHANGE_MERCHANT_ID || "mch_santeplus_benin_992",
        amount: requestedAmount,
        currency: "XOF",
        operator: operator === "mtn" ? "MTN_BENIN" : "MOOV_BENIN",
        customer_phone: phoneNumber,
        callback_url: `https://sante.gouv.bj/api/callbacks/izichange`,
        metadata: { patient_email: normalizedEmail }
      };
      patient.walletBalance += requestedAmount;
      return res.json({
        ...patient,
        integration: "izichange",
        operator: operator.toUpperCase(),
        txId: `izichg_tx_${Math.floor(1e5 + Math.random() * 9e5)}`,
        status: "success_synced"
      });
    }
    patient.walletBalance += requestedAmount;
    res.json(patient);
  });
  app.post("/api/payments/create-lightning-invoice", (req, res) => {
    const { amountXOF, description } = req.body;
    if (!amountXOF || amountXOF <= 0) {
      return res.status(400).json({ error: "Montant invalide" });
    }
    const amountSats = Math.round(Number(amountXOF) * XOF_TO_SATS);
    const invoiceId = `LN-INV-${Math.floor(1e5 + Math.random() * 9e5)}`;
    const breezPayload = {
      amount_sats: amountSats,
      description: description || "Facture Sant\xE9+ B\xE9nin",
      expiry_seconds: 3600,
      preimage: Array.from({ length: 32 }, () => Math.floor(Math.random() * 256))
    };
    const bolt11 = `lnbc${amountSats}u1p392066pp5y6m8a6uclm0aqlu7r96paxd0zcrsqm3sff4pghu5r3qpsms9p57qdqg2fhk6mmpwq5kget8wf5k2cmzv9hkutssw3skget8v4cxjumn94sk2uewdqh8gmpwd3jxc6tvd3hxw3scqpvqyjw5qcqpxrzjqw72q3ksla762hsp48qaswep7mqcxw6mppv6mpwpwqf7mpws9p4xpwpvq5qshxztf9f8gskqfq9gqkcxsqypqxpqxzszqxpqw7p9sk7tve9ekymv9cxqpxrzjqw72q3ksla762hsp48qaswep7mqcxw6mppv6mpwpwqf7mpws9p4xpwpvq5qshxztf9f8gskqfq9gqkcxsqypqxpqxzszqxpqw7p9`;
    LIGHTNING_INVOICES_DB[invoiceId] = {
      id: invoiceId,
      amountXOF: Number(amountXOF),
      amountSats,
      bolt11,
      isPaid: false,
      txHash: `ln_tx_0x${Array.from({ length: 40 }, () => "0123456789abcdef"[Math.floor(Math.random() * 16)]).join("")}`,
      createdAt: Date.now()
    };
    setTimeout(() => {
      if (LIGHTNING_INVOICES_DB[invoiceId]) {
        LIGHTNING_INVOICES_DB[invoiceId].isPaid = true;
      }
    }, 5e3);
    res.json({
      invoice: bolt11,
      invoiceId,
      amountSats,
      status: "pending_breez_routing"
    });
  });
  app.get("/api/payments/verify-lightning-invoice", (req, res) => {
    const { invoiceId } = req.query;
    if (!invoiceId) {
      return res.status(400).json({ error: "ID d'invoice manquant" });
    }
    const invoice = LIGHTNING_INVOICES_DB[String(invoiceId)];
    if (!invoice) {
      return res.status(404).json({ error: "Invoice non trouv\xE9e" });
    }
    if (invoice.isPaid) {
      const matchInvoices = INVOICES_DB.filter((inv) => inv.totalXOF === invoice.amountXOF && !inv.isPaid);
      if (matchInvoices.length > 0) {
        matchInvoices[0].isPaid = true;
        matchInvoices[0].paymentMethod = "Lightning";
        matchInvoices[0].txHash = invoice.txHash;
      }
    }
    res.json({
      isPaid: invoice.isPaid,
      txHash: invoice.txHash,
      invoiceId: invoice.id
    });
  });
  app.get("/api/invoices", (req, res) => {
    res.json(INVOICES_DB);
  });
  app.post("/api/invoices", (req, res) => {
    const { patientName, patientPhone, hospitalName, hospitalAddress, items, totalXOF, paymentMethod, doctorName, isPaid } = req.body;
    const invoiceId = `FACT-${Math.floor(1e5 + Math.random() * 9e5)}`;
    const txHash = `tx_benin_0x${Array.from({ length: 40 }, () => "0123456789abcdef"[Math.floor(Math.random() * 16)]).join("")}`;
    const newInvoice = {
      id: invoiceId,
      patientName,
      patientPhone: patientPhone || "+229 97 88 55 44",
      hospitalName,
      hospitalAddress,
      date: (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR") + " \xE0 " + (/* @__PURE__ */ new Date()).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" }),
      items: items || [],
      totalXOF: Number(totalXOF) || 0,
      totalSats: Math.round((Number(totalXOF) || 0) * XOF_TO_SATS),
      paymentMethod: paymentMethod || "Wallet",
      txHash,
      isPaid: !!isPaid,
      doctorName: doctorName || "Dr. Sossou"
    };
    INVOICES_DB.push(newInvoice);
    res.status(201).json(newInvoice);
  });
  app.post("/api/invoices/:id/pay", (req, res) => {
    const { id } = req.params;
    const { email } = req.body;
    const normalizedEmail = email?.toLowerCase().trim();
    const invoice = INVOICES_DB.find((inv) => inv.id === id);
    if (!invoice) {
      return res.status(404).json({ error: "Facture non trouv\xE9e" });
    }
    if (invoice.isPaid) {
      return res.status(400).json({ error: "Cette facture est d\xE9j\xE0 r\xE9gl\xE9e" });
    }
    const patient = PATIENTS_DB[normalizedEmail];
    if (!patient) {
      return res.status(404).json({ error: "Patient non trouv\xE9" });
    }
    if (patient.walletBalance < invoice.totalXOF) {
      return res.status(400).json({ error: `Solde insuffisant dans votre portefeuille Sant\xE9+ (${patient.walletBalance} XOF dispos vs ${invoice.totalXOF} XOF requis)` });
    }
    patient.walletBalance -= invoice.totalXOF;
    invoice.isPaid = true;
    invoice.paymentMethod = "Wallet";
    invoice.txHash = `tx_wallet_0x${Array.from({ length: 40 }, () => "0123456789abcdef"[Math.floor(Math.random() * 16)]).join("")}`;
    res.json({ invoice, patient });
  });
  app.post("/api/invoices/:id/pay-lightning", (req, res) => {
    const { id } = req.params;
    const invoice = INVOICES_DB.find((inv) => inv.id === id);
    if (!invoice) {
      return res.status(404).json({ error: "Facture non trouv\xE9e" });
    }
    invoice.isPaid = true;
    invoice.paymentMethod = "Lightning";
    invoice.txHash = `ln_tx_0x${Array.from({ length: 40 }, () => "0123456789abcdef"[Math.floor(Math.random() * 16)]).join("")}`;
    res.json(invoice);
  });
  app.get("/api/access-requests", (req, res) => {
    res.json(ACCESS_REQUESTS_DB);
  });
  app.post("/api/access-requests", (req, res) => {
    const { npi, doctorEmail, hospitalName } = req.body;
    const newRequest = {
      id: `req-${Math.floor(100 + Math.random() * 900)}`,
      npi,
      doctorEmail,
      hospitalName,
      status: "pending",
      requestedAt: (/* @__PURE__ */ new Date()).toLocaleDateString("fr-FR") + " \xE0 " + (/* @__PURE__ */ new Date()).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" })
    };
    ACCESS_REQUESTS_DB.push(newRequest);
    res.status(201).json(newRequest);
  });
  app.patch("/api/access-requests/:id/status", (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const request = ACCESS_REQUESTS_DB.find((req2) => req2.id === id);
    if (!request) {
      return res.status(404).json({ error: "Demande d'acc\xE8s introuvable" });
    }
    request.status = status;
    res.json(request);
  });
  app.post("/api/chat", async (req, res) => {
    const { message, history } = req.body;
    if (!message) {
      return res.status(400).json({ error: "Le message est requis." });
    }
    if (process.env.GEMINI_API_KEY) {
      try {
        const { GoogleGenAI } = await import("@google/genai");
        const ai = new GoogleGenAI({
          apiKey: process.env.GEMINI_API_KEY,
          httpOptions: {
            headers: {
              "User-Agent": "aistudio-build"
            }
          }
        });
        const systemInstruction = `
          Tu es "L'Assistant Sant\xE9+ B\xE9nin", un chatbot m\xE9dical et administratif d'Abomey-Calavi et Cotonou au B\xE9nin.
          R\xE9ponds avec clart\xE9, bienveillance et rigueur. Tes r\xE9ponses doivent \xEAtre courtes, polies et structur\xE9es (en fran\xE7ais).
          
          R\xE8gles cl\xE9s du projet Sant\xE9+ \xE0 appliquer :
          1. Les rendez-vous m\xE9dicaux : Le choix du Service m\xE9dical et de la Cause (motif) est obligatoire. Le choix du Docteur/M\xE9decin est facultatif (optionnel).
          2. Les factures et papiers : Les factures pay\xE9es comportent un tampon officiel rouge "\u2605 PAY\xC9 \u2605" ou "PAY\xC9 & CERTIFI\xC9" du Minist\xE8re de la Sant\xE9 du B\xE9nin. La v\xE9rification se fait exclusivement offline par scan de QR code (qui contient les donn\xE9es d\xE9centralis\xE9es en clair). Aucune donn\xE9e confidentielle ou m\xE9dicale n'est h\xE9berg\xE9e ou publi\xE9e en ligne sur le site.
          3. Autorisation de dossier par le patient : Le patient n'a pas besoin de reconnaissance faciale ou d'empreinte digitale. Il signe l'autorisation via un bouton s\xE9curis\xE9 avec son identit\xE9 Lightning Network (LN Sign - signature cryptographique d\xE9centralis\xE9e Bitcoin) de fa\xE7on claire et visible.
          4. Le paiement se fait par Portefeuille FCFA local ou par Lightning Network (Satoshis / Bitcoin) instantan\xE9ment.
          
          Reste humble et courtois. Ne fais pas de suppositions m\xE9dicales complexes, conseille de consulter si n\xE9cessaire.
        `;
        const response = await ai.models.generateContent({
          model: "gemini-3.5-flash",
          contents: [
            { role: "user", parts: [{ text: `Instruction syst\xE8me: ${systemInstruction}` }] },
            ...(history || []).map((h) => ({
              role: h.role === "user" ? "user" : "model",
              parts: [{ text: h.text }]
            })),
            { role: "user", parts: [{ text: message }] }
          ]
        });
        const reply2 = response.text || "D\xE9sol\xE9, je n'ai pas pu g\xE9n\xE9rer de r\xE9ponse.";
        return res.json({ text: reply2, source: "gemini" });
      } catch (err) {
        console.error("Gemini API Error, falling back to local chat engine:", err);
      }
    }
    const msg = message.toLowerCase();
    let reply = "";
    if (msg.includes("facture") || msg.includes("payer") || msg.includes("recharge") || msg.includes("solde") || msg.includes("argent")) {
      reply = "Sur Sant\xE9+ B\xE9nin, vos factures de soins sont r\xE9gl\xE9es en FCFA (via le solde recharg\xE9 de votre portefeuille) ou en Satoshis via le R\xE9seau Lightning (Bitcoin). Une fois pay\xE9e, la facture re\xE7oit imm\xE9diatement un tampon rouge officiel **\u2605 PAY\xC9 & CERTIFI\xC9 \u2605** du Minist\xE8re de la Sant\xE9 et affiche un QR Code. Ce QR Code permet une v\xE9rification 100% hors-ligne (offline) par scan de vos papiers officiels.";
    } else if (msg.includes("rendez") || msg.includes("rdv") || msg.includes("docteur") || msg.includes("m\xE9decin") || msg.includes("service")) {
      reply = "Pour prendre rendez-vous chez Sant\xE9+ : vous devez obligatoirement s\xE9lectionner le **Service m\xE9dical** ainsi que la **Cause/Raison** de votre visite. Le choix d'un **Docteur sp\xE9cifique** est quant \xE0 lui optionnel (vous pouvez le laisser vide si vous n'avez pas de pr\xE9f\xE9rence).";
    } else if (msg.includes("autorisation") || msg.includes("signer") || msg.includes("blockchain") || msg.includes("dossier") || msg.includes("lightning") || msg.includes("empreinte") || msg.includes("visage") || msg.includes("ident")) {
      reply = "La s\xE9curit\xE9 de Sant\xE9+ est d\xE9centralis\xE9e et respecte votre vie priv\xE9e. Vous n'avez **aucun besoin de reconnaissance faciale ou d'empreinte digitale**. \xC0 la place, un bouton clair vous permet de signer vos autorisations de dossier m\xE9dical \xE0 l'aide de votre cl\xE9 priv\xE9e du **R\xE9seau Lightning (LN Sign)**. C'est instantan\xE9, visible et inviolable.";
    } else if (msg.includes("scan") || msg.includes("papier") || msg.includes("v\xE9rification") || msg.includes("hors ligne") || msg.includes("offline")) {
      reply = "La v\xE9rification des papiers et dossiers m\xE9dicaux est con\xE7ue pour fonctionner **uniquement par scan hors ligne**. Les informations du patient sont g\xE9n\xE9r\xE9es en texte brut dans le QR code pour un transfert direct de mobile \xE0 mobile, sans \xEAtre publi\xE9es ou h\xE9berg\xE9es en ligne sur internet pour garantir une confidentialit\xE9 totale.";
    } else if (msg.includes("bonjour") || msg.includes("salut") || msg.includes("hello")) {
      reply = "Bonjour ! Je suis l'Assistant Virtuel de Sant\xE9+ B\xE9nin. Comment puis-je vous aider aujourd'hui ? Vous pouvez me poser des questions sur les factures, les rendez-vous, la signature Lightning Network ou la v\xE9rification offline par scan !";
    } else {
      reply = "Je suis l'Assistant Sant\xE9+ B\xE9nin. Je peux vous expliquer comment fonctionnent nos services : \n- **Factures** : Tampon PAY\xC9 officiel, QR Code offline.\n- **Rendez-vous** : Service et motif requis, docteur optionnel.\n- **S\xE9curit\xE9** : Signature cryptographique Lightning (LN Sign), sans biom\xE9trie (ni visage, ni empreinte).\n- **Scan** : V\xE9rification des papiers 100% hors-ligne.\n\nQue souhaitez-vous savoir en particulier ?";
    }
    res.json({ text: reply, source: "local" });
  });
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`[Sant\xE9+ Benin Server] running on http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
