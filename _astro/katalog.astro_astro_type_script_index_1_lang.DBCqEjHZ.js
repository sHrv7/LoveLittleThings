window.cart=[];window.contactEmail="info@lovellthings.com";Array.from({length:30},(e,t)=>({name:`Boja ${t+1}`,value:`Boja ${t+1}`}));const u=Array.from({length:43},(e,t)=>({name:`Viktorija (${t+1}).jpeg`,value:`Viktorija (${t+1}).jpeg`})),n={bojaSeta:["Srebrna.jpeg","Zlatna.jpeg","Rose.jpeg"],fontoviZaKrsniSet:["TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg"],bojeVrpca:["TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg"],krila:["Ne.jpeg","Da.jpeg"],bojuPerlicaKrunice:["TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg"]};function m(){document.querySelectorAll(".option-card, .option-image").forEach(i=>{i.addEventListener("click",function(){const a=this.dataset.field,o=this.dataset.value;if(!a||!o)return;const s=document.getElementById(`${a}Input`);if(s){if(s.value=o,document.querySelectorAll(`.option-card[data-field="${a}"], .option-image[data-field="${a}"]`).forEach(r=>r.classList.remove("selected")),this.classList.add("selected"),a==="krunica"&&(document.getElementById("krunicaSection").style.display=o==="Da"?"block":"none"),a==="biblija"&&(document.getElementById("biblijaSection").style.display=o!=="Ne"?"block":"none"),a==="par"){const r=o!=="Samo nadopuna",p=o!=="Samo baza";document.getElementById("bazaSection").style.display=r?"block":"none",document.getElementById("nadopunaSection").style.display=p?"block":"none"}a==="deliveryMethod"&&b(o)}})}),document.querySelectorAll("select").forEach(i=>{i.addEventListener("change",function(){const a=this.dataset.field,o=this.value;if(!a||!o)return;const s=document.getElementById(`${a}Input`);s&&(s.value=o),a==="krunica"&&(document.getElementById("krunicaSection").style.display=o==="Da"?"block":"none"),a==="biblija"&&(document.getElementById("biblijaSection").style.display=o!=="Ne"?"block":"none")})}),document.querySelectorAll(".cancel-modal-btn").forEach(i=>{i.addEventListener("click",d)});const e=document.getElementById("krsniSetForm");e&&e.addEventListener("submit",S);const t=document.getElementById("vikForm");t&&t.addEventListener("submit",h);const l=document.getElementById("customSimpleForm");if(l){const i=l.dataset.productName;l.addEventListener("submit",a=>I(a,i))}}function b(e){document.getElementById("deliveryMethodInput").value=e;const t=document.getElementById("chooseLockerBoxnowButton"),l=document.getElementById("open-gls"),i=document.getElementById("deliveryAddressInput");t&&l&&(t.style.display=e==="Boxnow"?"inline-flex":"none",l.style.display=e==="GLS_paketomat"?"inline-flex":"none"),i&&(i.placeholder=e==="GLS_kucna_adresa"?"Upišite adresu za dostavu na kućnu adresu":"Odaberite adresu paketomata")}function v(){document.getElementById("modalContent").innerHTML=g(),document.getElementById("customizationModal").classList.add("active"),document.body.style.overflow="hidden",m()}function j(){document.getElementById("modalContent").innerHTML=f(),document.getElementById("customizationModal").classList.add("active"),document.body.style.overflow="hidden",m()}function y(e){document.getElementById("modalContent").innerHTML=k(e),document.getElementById("customizationModal").classList.add("active"),document.body.style.overflow="hidden",m()}function g(){return`
                <h3 style="color: var(--llt-accent-mid);">Prilagodi Krsni Set</h3>
                <form id="krsniSetForm">
                    <div class="mb-3">
                        <label class="form-label" style="color: var(--llt-accent-dark);">Boja krsnog seta:</label>
                        <input type="hidden" name="boja_seta" id="boja_setaInput">
                        <div class="selection-grid mt-2">
                            ${n.bojaSeta.map(e=>`<img src="../images/bojaNadopuna/${e}" data-field="boja_seta" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
                        </div>
                    </div>

                    <div class="mb-3">
                        <label class="form-label" style="color: var(--llt-accent-dark);">Vanjski dio kutije:</label>
                        <input type="text" name="vanjski_dio_kutije" class="form-control" required style="border: 1px solid var(--llt-accent-mid);">
                    </div>

                    <div class="border-top border-bottom py-3 my-3">
                        <h5 style="color: var(--llt-accent-mid);">Svijeća</h5>
                        <div class="mb-3">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Boja vrpce:</label>
                            <input type="hidden" name="boja_vrpce" id="boja_vrpceInput">
                            <div class="selection-grid mt-2">
                                ${n.bojeVrpca.map(e=>`<img src="../images/bojeVrpca/${e}" data-field="boja_vrpce" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Krila na svijeći:</label>
                            <input type="hidden" name="krila" id="krilaInput">
                            <div class="selection-grid mt-2">
                                ${n.krila.map(e=>`<img src="../images/krila/${e}" data-field="krila" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
                            </div>
                        </div>
                    </div>

                    <div class="border-bottom py-3 my-3">
                        <h5 style="color: var(--llt-accent-mid);">Unutrašnjost kutije</h5>
                        <div class="mb-3">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Poruka sredina kutije (max 120 znakova):</label>
                            <textarea name="poruka_sredina" class="form-control" maxlength="120" rows="2" style="border: 1px solid var(--llt-accent-mid);"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Font sredina:</label>
                            <input type="hidden" name="font_sredina" id="font_sredinaInput">
                            <div class="selection-grid mt-2">
                                ${n.fontoviZaKrsniSet.map(e=>`<img src="../images/fontoviZaKrsniSet/${e}" data-field="font_sredina" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Posveta (max 120 znakova):</label>
                            <textarea name="posveta" class="form-control" maxlength="120" rows="2" style="border: 1px solid var(--llt-accent-mid);"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Font dolje:</label>
                            <input type="hidden" name="font_dolje" id="font_doljeInput">
                            <div class="selection-grid mt-2">
                                ${n.fontoviZaKrsniSet.map(e=>`<img src="../images/fontoviZaKrsniSet/${e}" data-field="font_dolje" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
                            </div>
                        </div>
                    </div>

                    <div class="border-bottom py-3 my-3">
                        <h5 style="color: var(--llt-accent-mid);">Majica</h5>
                        <div class="mb-3">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Odabir za majicu:</label>
                            <select name="stil_majice" class="form-control" style="border: 1px solid var(--llt-accent-mid); color: var(--llt-accent-dark);">
                                <option value="">-- Odaberi --</option>
                                <option value="Ime">Ime</option>
                                <option value="Krizic">Krizic</option>
                                <option value="Krizic + ime">Krizic + ime</option>
                                <option value="Krizic + ime + od danas si dijete Bozje">Krizic + ime + od danas si dijete Bozje</option>
                            </select>
                        </div>
                    </div>

                    <div class="border-bottom py-3 my-3">
                        <h5 style="color: var(--llt-accent-mid);">Maramica</h5>
                        <select name="stil_maramice" id="stil_maramiceInput" class="form-control" style="border: 1px solid var(--llt-accent-mid); color: var(--llt-accent-dark);">
                            <option value="">-- Odaberi --</option>
                            <option value="Krizic">Krizic</option>
                            <option value="Ime">Ime</option>
                            <option value="Ime i krizic">Ime i krizic</option>
                        </select>
                    </div>

                    <div class="border-bottom py-3 my-3">
                        <h5 style="color: var(--llt-accent-mid);">Krunica</h5>
                        <input type="hidden" name="krunica" id="krunicaInput">
                        <select class="form-control" data-field="krunica" style="border: 1px solid var(--llt-accent-mid); color: var(--llt-accent-dark);">
                            <option value="">-- Odaberi --</option>
                            <option value="Ne">Ne</option>
                            <option value="Da">Da</option>
                        </select>
                        <div id="krunicaSection" style="display: none; margin-top: 16px;">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Boja perlica:</label>
                            <input type="hidden" name="boja_perlica" id="boja_perlicaInput">
                            <div class="selection-grid mt-2">
                                ${n.bojuPerlicaKrunice.map(e=>`<img src="../images/bojuPerlicaKrunice/${e}" data-field="boja_perlica" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
                            </div>
                        </div>
                    </div>

                    <div class="border-bottom py-3 my-3">
                        <h5 style="color: var(--llt-accent-mid);">Biblija</h5>
                        <input type="hidden" name="biblija" id="biblijaInput">
                        <select class="form-control" data-field="biblija" style="border: 1px solid var(--llt-accent-mid); color: var(--llt-accent-dark);">
                            <option value="">-- Odaberi --</option>
                            <option value="Ne">Ne</option>
                            <option value="Mini biblija za djecu">Mini biblija za djecu</option>
                            <option value="Moja krsna biblija">Moja krsna biblija</option>
                        </select>
                        <div id="biblijaSection" style="display: none; margin-top: 16px;">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Prilagodba biblije:</label>
                            <input type="hidden" name="biblija_sa_imenom" id="biblija_sa_imenomInput">
                            <div class="selection-grid mt-2">
                                <button type="button" class="option-card" data-field="biblija_sa_imenom" data-value="Da">Ime na bibliji</button>
                                <button type="button" class="option-card" data-field="biblija_sa_imenom" data-value="Ne">Bez imena</button>
                            </div>
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
            `}function f(){return`
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
                            ${u.map(e=>`<img src="../images/bojaNadopuna/${e.name}" data-field="boja_nadopune" data-value="${e.name.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
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
            `}function k(e){return`
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
            `}function S(e){e.preventDefault();const t=new FormData(document.getElementById("krsniSetForm")),l=Object.fromEntries(t);cart.push({product:"Krsni Set",...l}),c(),d()}function h(e){e.preventDefault();const t=new FormData(document.getElementById("vikForm")),l=Object.fromEntries(t);cart.push({product:"Viktorija Naušnice",...l}),c(),d()}function I(e,t){e.preventDefault();const l=new FormData(document.getElementById("customSimpleForm")),i=Object.fromEntries(l);cart.push({product:t,...i}),c(),d()}function d(){document.getElementById("customizationModal").classList.remove("active"),document.body.style.overflow="auto",document.getElementById("modalContent").innerHTML=""}function c(){const e=document.getElementById("orderSummary");if(!cart.length){e.value="",document.getElementById("cartSection").style.display="none";return}let t="";cart.forEach((l,i)=>{t+=`PROIZVOD ${i+1}: ${l.product}
`;for(const[a,o]of Object.entries(l))a!=="product"&&o&&(t+=`  ${a}: ${o}
`);t+=`
`}),e.value=t,document.getElementById("cartSection").style.display="block"}function E(){cart.length=0,c()}document.querySelectorAll(".customize-btn").forEach(e=>{e.addEventListener("click",function(){const t=this.dataset.productId,l=this.dataset.productName;t==="krsni-setovi"?v():t==="nausnice"?j():y(l)})});document.getElementById("sendCartEmailBtn").addEventListener("click",sendCartEmail);document.getElementById("clearCartBtn").addEventListener("click",E);document.getElementById("customizationModal").addEventListener("click",function(e){e.target===this&&d()});
