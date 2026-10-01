const p=[],j=window;j.cart=p;function n(e){return document.getElementById(e)}function r(e){const a=n(e);if(!a)throw new Error(`Required page element not found: ${e}`);return a}Array.from({length:30},(e,a)=>({name:`Boja ${a+1}`,value:`Boja ${a+1}`}));const k=Array.from({length:43},(e,a)=>({name:`Viktorija (${a+1}).jpeg`,value:`Viktorija (${a+1}).jpeg`})),u={bojaSeta:["Srebrna.jpeg","Zlatna.jpeg","Roza.jpeg"],fontoviZaKrsniSet:["TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg"],bojeVrpca:["Plava-svijetla.jpeg","Roza-prasasta-1.jpeg","Smeda-tamna.jpeg","Bijela.jpeg","Bijela-topla.jpeg","Krem.jpeg","Zlatna-tamna.jpeg","Zlatna-svijetla.jpeg","Roza-prasasta-2.jpeg","Rose-gold.jpeg","Mauve.jpeg","Breskvasta.jpeg","Lila-svijetla.jpeg","Roza-svijetla-1.jpeg","Ljubicasta.jpeg","Taupe.jpeg","Plava-kraljevska-1.jpeg","Roza-srednja.jpeg","Roza-bijela.jpeg","Breskvasta-svijetla.jpeg","Roza-lila.jpeg","Mint.jpeg","Zelena-maslinasta-svijetla.jpeg","Khaki.jpeg","Mint-svijetla.jpeg","Zelena-tamna.jpeg","Zelena-petrolej.jpeg","Plava-kraljevska-2.jpeg","Teget-tamna.jpeg","Teget-svijetla.jpeg","Plava-jarka.jpeg"],krila:["Ne.jpeg","Da.jpeg"],bojuPerlicaKrunice:["TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg"]};function f(){document.querySelectorAll(".option-card, .option-image").forEach(i=>{i.addEventListener("click",function(){const o=this.dataset.field,l=this.dataset.value;if(!o||!l)return;const c=n(`${o}Input`);if(c){if(c.value=l,document.querySelectorAll(`.option-card[data-field="${o}"], .option-image[data-field="${o}"]`).forEach(s=>s.classList.remove("selected")),this.classList.add("selected"),o==="par"){const s=l!=="Samo nadopuna",d=l!=="Samo baza",m=n("bazaSection"),g=n("nadopunaSection");m&&(m.style.display=s?"block":"none"),g&&(g.style.display=d?"block":"none")}o==="deliveryMethod"&&S(l)}})}),document.querySelectorAll("select").forEach(i=>{i.addEventListener("change",function(){const o=this.dataset.field,l=this.value;if(!o||!l)return;const c=n(`${o}Input`);if(c&&(c.value=l),o==="krunica"){const s=n("krunicaSection");if(s&&(s.style.display=l==="Da"?"block":"none"),l==="Ne"){const d=n("boja_perlicaInput");d&&(d.value="")}}if(o==="biblija"){const s=n("biblijaSection");s&&(s.style.display=l!=="Ne"?"block":"none");const d=n("biblijaSaImenomSelect");if(d&&(d.required=l!=="Ne",l==="Ne"&&(d.value="")),l==="Ne"){const m=n("biblija_sa_imenomInput");m&&(m.value="")}}})}),document.querySelectorAll(".cancel-modal-btn").forEach(i=>{i.addEventListener("click",b)});const e=document.getElementById("krsniSetForm");e&&e.addEventListener("submit",w);const a=document.getElementById("vikForm");a&&a.addEventListener("submit",x);const t=document.getElementById("customSimpleForm");if(t){const i=t.dataset.productName??"";t.addEventListener("submit",o=>E(o,i))}}function S(e){const a=n("deliveryMethodInput");a&&(a.value=e);const t=document.getElementById("chooseLockerBoxnowButton"),i=document.getElementById("open-gls"),o=document.getElementById("deliveryAddressInput");t&&i&&(t.style.display=e==="Boxnow"?"inline-flex":"none",i.style.display=e==="GLS_paketomat"?"inline-flex":"none"),o&&(o.placeholder=e==="GLS_kucna_adresa"?"Upišite adresu za dostavu na kućnu adresu":"Odaberite BoxNow paketomat")}function h(){r("modalContent").innerHTML=I(),r("customizationModal").classList.add("active"),document.body.style.overflow="hidden",f()}function $(){r("modalContent").innerHTML=_(),r("customizationModal").classList.add("active"),document.body.style.overflow="hidden",f()}function z(e){r("modalContent").innerHTML=T(e),r("customizationModal").classList.add("active"),document.body.style.overflow="hidden",f()}function I(){return`
                <h3 style="color: var(--llt-accent-mid);">Prilagodi Krsni Set</h3>
                <form id="krsniSetForm">
                    <div class="mb-3">
                        <label class="form-label" style="color: var(--llt-accent-dark);">Boja krsnog seta:</label>
                        <input type="hidden" name="boja_seta" id="boja_setaInput" data-required-image="Boja krsnog seta">
                        <div class="selection-grid mt-2">
                            ${u.bojaSeta.map(e=>`<img src="../images/BojaSeta/${e}" data-field="boja_seta" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label class="form-label" style="color: var(--llt-accent-dark);">Poruka na vanjskom dijelu kutije(ime):</label>
                        <input type="text" name="vanjski_dio_kutije" class="form-control" required style="border: 1px solid var(--llt-accent-mid);">
                    </div>

                    <div class="border-top border-bottom py-3 my-3">
                        <h5 style="color: var(--llt-accent-mid);">Svijeća</h5>
                        <div class="mb-3">
                            <label for="bojaSvijeceSelect" class="form-label" style="color: var(--llt-accent-dark);">Boja svijeće:</label>
                            <input type="hidden" name="boja_svijece" id="boja_svijeceInput">
                            <select id="bojaSvijeceSelect" class="form-control" data-field="boja_svijece" required style="border: 1px solid var(--llt-accent-mid); color: var(--llt-accent-dark);">
                                <option value="" disabled selected>-- Odaberi --</option>
                                <option value="Bijela">Bijela</option>
                                <option value="Srebrna">Srebrna</option>
                                <option value="Zlatna">Zlatna</option>
                                <option value="Roza">Roza</option>
                                <option value="Plava">Plava</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Boja vrpce:</label>
                            <input type="hidden" name="boja_vrpce" id="boja_vrpceInput" data-required-image="Boja vrpce">
                            <div class="selection-grid mt-2">
                                ${u.bojeVrpca.map(e=>`<img src="../images/BojaVrpce/${e}" data-field="boja_vrpce" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Krila na svijeći:</label>
                            <input type="hidden" name="krila" id="krilaInput" data-required-image="Krila na svijeći">
                            <div class="selection-grid mt-2">
                                ${u.krila.map(e=>`<img src="../images/KrilaNaSvijeci/${e}" data-field="krila" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
                            </div>
                        </div>
                    </div>

                    <div class="border-bottom py-3 my-3">
                        <h5 style="color: var(--llt-accent-mid);">Unutrašnjost kutije</h5>
                        <div class="mb-3">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Poruka na sredini kutije (max 300 znakova):</label>
                            <textarea name="poruka_sredina" class="form-control" maxlength="300" rows="2" required style="border: 1px solid var(--llt-accent-mid);"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Font sredina:</label>
                            <input type="hidden" name="font_sredina" id="font_sredinaInput" data-required-image="Font sredina">
                            <div class="selection-grid mt-2">
                                ${u.fontoviZaKrsniSet.map(e=>`<img src="../images/fontoviZaKrsniSet/${e}" data-field="font_sredina" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Posveta (max 300 znakova):</label>
                            <textarea name="posveta" class="form-control" maxlength="300" rows="2" required style="border: 1px solid var(--llt-accent-mid);"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Font dolje:</label>
                            <input type="hidden" name="font_dolje" id="font_doljeInput" data-required-image="Font dolje">
                            <div class="selection-grid mt-2">
                                ${u.fontoviZaKrsniSet.map(e=>`<img src="../images/fontoviZaKrsniSet/${e}" data-field="font_dolje" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
                            </div>
                        </div>
                    </div>

                    <div class="border-bottom py-3 my-3">
                        <h5 style="color: var(--llt-accent-mid);">Majica</h5>
                        <div class="mb-3">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Odabir za majicu:</label>
                            <select name="stil_majice" class="form-control" required style="border: 1px solid var(--llt-accent-mid); color: var(--llt-accent-dark);">
                                <option value="" disabled selected>-- Odaberi --</option>
                                <option value="Ime">Ime</option>
                                <option value="Krizic">Krizic</option>
                                <option value="Krizic + ime">Krizic + ime</option>
                                <option value="Krizic + ime + od danas si dijete Bozje">Krizic + ime + od danas si dijete Bozje</option>
                            </select>
                        </div>
                    </div>

                    <div class="border-bottom py-3 my-3">
                        <h5 style="color: var(--llt-accent-mid);">Maramica</h5>
                        <select name="stil_maramice" id="stil_maramiceInput" class="form-control" required style="border: 1px solid var(--llt-accent-mid); color: var(--llt-accent-dark);">
                            <option value="" disabled selected>-- Odaberi --</option>
                            <option value="Krizic">Krizic</option>
                            <option value="Ime">Ime</option>
                            <option value="Ime i krizic">Ime i krizic</option>
                        </select>
                    </div>

                    <div class="border-bottom py-3 my-3">
                        <h5 style="color: var(--llt-accent-mid);">Krunica</h5>
                        <input type="hidden" name="krunica" id="krunicaInput">
                        <select class="form-control" data-field="krunica" required style="border: 1px solid var(--llt-accent-mid); color: var(--llt-accent-dark);">
                            <option value="" disabled selected>-- Odaberi --</option>
                            <option value="Ne">Ne</option>
                            <option value="Da">Da</option>
                        </select>
                        <div id="krunicaSection" style="display: none; margin-top: 16px;">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Boja perlica:</label>
                            <input type="hidden" name="boja_perlica" id="boja_perlicaInput" data-required-image="Boja perlica">
                            <div class="selection-grid mt-2">
                                ${u.bojuPerlicaKrunice.map(e=>`<img src="../images/bojuPerlicaKrunice/${e}" data-field="boja_perlica" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
                            </div>
                        </div>
                    </div>

                    <div class="border-bottom py-3 my-3">
                        <h5 style="color: var(--llt-accent-mid);">Biblija</h5>
                        <input type="hidden" name="biblija" id="biblijaInput">
                        <select class="form-control" data-field="biblija" required style="border: 1px solid var(--llt-accent-mid); color: var(--llt-accent-dark);">
                            <option value="" disabled selected>-- Odaberi --</option>
                            <option value="Ne">Ne</option>
                            <option value="Mini biblija za djecu">Mini biblija za djecu</option>
                            <option value="Moja krsna biblija">Moja krsna biblija</option>
                        </select>
                        <div id="biblijaSection" style="display: none; margin-top: 16px;">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Prilagodba biblije:</label>
                            <input type="hidden" name="biblija_sa_imenom" id="biblija_sa_imenomInput">
                            <select id="biblijaSaImenomSelect" class="form-control mt-2" data-field="biblija_sa_imenom" style="border: 1px solid var(--llt-accent-mid); color: var(--llt-accent-dark);">
                                <option value="" disabled selected>-- Odaberi --</option>
                                <option value="Da">Ime na bibliji</option>
                                <option value="Ne">Bez imena</option>
                            </select>
                        </div>
                    </div>

                    <div class="d-flex gap-2 mt-4 flex-wrap">
                        <button type="submit" class="btn btn-success w-100">
                            <i class="fas fa-cart-plus me-2"></i>Dodaj u košaricu
                        </button>
                        <button type="button" class="btn btn-secondary w-100 cancel-modal-btn">
                            <i class="fas fa-times me-2"></i>Otkaži
                        </button>
                    </div>
                </form>
            `}function _(){return`
                <h3 style="color: var(--llt-accent-mid);">Prilagodi Viktorija Naušnice</h3>
                <form id="vikForm">
                    <div class="mb-3">
                        <label class="form-label" style="color: var(--llt-accent-dark);">Par:</label>
                        <input type="hidden" name="par" id="parInput">
                        <div class="selection-grid mt-2">
                            <button type="button" class="option-card" data-field="par" data-value="Komplet">Komplet</button>
                            <button type="button" class="option-card" data-field="par" data-value="Samo baza">Samo baza</button>
                            <button type="button" class="option-card" data-field="par" data-value="Samo nadopuna">Samo nadopuna</button>
                        </div>
                    </div>

                    <div id="bazaSection" class="mb-3" style="display: none;">
                        <label class="form-label" style="color: var(--llt-accent-dark);">Boja baze:</label>
                        <input type="hidden" name="boja_baze" id="boja_bazeInput">
                        <div class="selection-grid mt-2">
                            <button type="button" class="option-card" data-field="boja_baze" data-value="Zlatna">Zlatna</button>
                            <button type="button" class="option-card" data-field="boja_baze" data-value="Srebrna">Srebrna</button>
                        </div>
                    </div>

                    <div id="nadopunaSection" class="mb-3" style="display: none;">
                        <label class="form-label" style="color: var(--llt-accent-dark);">Boja nadopune:</label>
                        <input type="hidden" name="boja_nadopune" id="boja_nadopuneInput">
                        <div class="selection-grid mt-2">
                            ${k.map(e=>`<img src="../images/bojaNadopuna/${e.name}" data-field="boja_nadopune" data-value="${e.name.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
                        </div>
                    </div>

                    <div class="d-flex gap-2 mt-4 flex-wrap">
                        <button type="submit" class="btn btn-success w-100">
                            <i class="fas fa-cart-plus me-2"></i>Dodaj u košaricu
                        </button>
                        <button type="button" class="btn btn-secondary w-100 cancel-modal-btn">
                            <i class="fas fa-times me-2"></i>Otkaži
                        </button>
                    </div>
                </form>
            `}function T(e){return`
                <h3 style="color: var(--llt-accent-mid);">Prilagodi ${e}</h3>
                <form id="customSimpleForm" data-product-name="${e}">
                    <div class="mb-3">
                        <label class="form-label" style="color: var(--llt-accent-dark);">Boja:</label>
                        <input type="hidden" name="boja" id="bojaInput">
                        <div class="selection-grid mt-2">
                            <button type="button" class="option-card" data-field="boja" data-value="Gold">Gold</button>
                            <button type="button" class="option-card" data-field="boja" data-value="Silver">Silver</button>
                        </div>
                    </div>
                    <div class="mb-3">
                        <label class="form-label" style="color: var(--llt-accent-dark);">Napomena:</label>
                        <textarea name="napomena" class="form-control" rows="3" placeholder="Dodatna napomena vezana za ovaj proizvod" style="border: 1px solid var(--llt-accent-mid);"></textarea>
                    </div>
                    <div class="d-flex gap-2 mt-4 flex-wrap">
                        <button type="submit" class="btn btn-success w-100">
                            <i class="fas fa-cart-plus me-2"></i>Dodaj u košaricu
                        </button>
                        <button type="button" class="btn btn-secondary w-100 cancel-modal-btn">
                            <i class="fas fa-times me-2"></i>Otkaži
                        </button>
                    </div>
                </form>
            `}function B(e){const a=Array.from(e.querySelectorAll("[data-required-image]")).find(t=>{const i=t.closest("#krunicaSection");return!t.value&&i?.style.display!=="none"});return a?(e.querySelector(`.option-image[data-field="${a.name}"]`)?.scrollIntoView({behavior:"smooth",block:"center"}),alert(`Odaberite sliku za polje: ${a.dataset.requiredImage}.`),!1):!0}function w(e){e.preventDefault();const a=e.currentTarget;if(!(a instanceof HTMLFormElement)||!B(a))return;const t=new FormData(a),i=Object.fromEntries(t);p.push({product:"Krsni Set",...i}),v(),b()}function x(e){e.preventDefault();const a=e.currentTarget;if(!(a instanceof HTMLFormElement))return;const t=new FormData(a),i=Object.fromEntries(t);p.push({product:"Viktorija Naušnice",...i}),v(),b()}function E(e,a){e.preventDefault();const t=e.currentTarget;if(!(t instanceof HTMLFormElement))return;const i=new FormData(t),o=Object.fromEntries(i);p.push({product:a,...o}),v(),b()}function b(){n("customizationModal")?.classList.remove("active"),document.body.style.overflow="auto";const e=n("modalContent");e&&(e.innerHTML="")}function v(){const e=n("orderSummary"),a=n("cartSection");if(!e||!a)return;if(!p.length){e.value="",a.style.display="none";return}let t="";p.forEach((i,o)=>{t+=`PROIZVOD ${o+1}: ${i.product}
`;for(const[l,c]of Object.entries(i))l!=="product"&&c&&(t+=`  ${l}: ${c}
`);t+=`
`}),e.value=t,a.style.display="block"}function y(){p.length=0,v()}j.clearCart=y;document.querySelectorAll(".customize-btn").forEach(e=>{e.addEventListener("click",function(){const a=this.dataset.productId,t=this.dataset.productName??"";a==="krsni-setovi"?h():a==="nausnice"?$():z(t)})});r("sendCartEmailBtn").addEventListener("click",()=>j.sendCartEmail?.());r("clearCartBtn").addEventListener("click",y);r("customizationModal").addEventListener("click",function(e){e.target===this&&b()});
