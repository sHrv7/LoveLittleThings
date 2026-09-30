const d=[],b=window;b.cart=d;function s(e){return document.getElementById(e)}function c(e){const a=s(e);if(!a)throw new Error(`Required page element not found: ${e}`);return a}Array.from({length:30},(e,a)=>({name:`Boja ${a+1}`,value:`Boja ${a+1}`}));const k=Array.from({length:43},(e,a)=>({name:`Viktorija (${a+1}).jpeg`,value:`Viktorija (${a+1}).jpeg`})),p={bojaSeta:["Srebrna.jpeg","Zlatna.jpeg","Rose.jpeg"],fontoviZaKrsniSet:["TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg"],bojeVrpca:["TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg"],krila:["Ne.jpeg","Da.jpeg"],bojuPerlicaKrunice:["TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg"]};function v(){document.querySelectorAll(".option-card, .option-image").forEach(o=>{o.addEventListener("click",function(){const t=this.dataset.field,l=this.dataset.value;if(!t||!l)return;const r=s(`${t}Input`);if(r){if(r.value=l,document.querySelectorAll(`.option-card[data-field="${t}"], .option-image[data-field="${t}"]`).forEach(n=>n.classList.remove("selected")),this.classList.add("selected"),t==="krunica"){const n=s("krunicaSection");n&&(n.style.display=l==="Da"?"block":"none")}if(t==="biblija"){const n=s("biblijaSection");n&&(n.style.display=l!=="Ne"?"block":"none")}if(t==="par"){const n=l!=="Samo nadopuna",y=l!=="Samo baza",f=s("bazaSection"),j=s("nadopunaSection");f&&(f.style.display=n?"block":"none"),j&&(j.style.display=y?"block":"none")}t==="deliveryMethod"&&S(l)}})}),document.querySelectorAll("select").forEach(o=>{o.addEventListener("change",function(){const t=this.dataset.field,l=this.value;if(!t||!l)return;const r=s(`${t}Input`);if(r&&(r.value=l),t==="krunica"){const n=s("krunicaSection");n&&(n.style.display=l==="Da"?"block":"none")}if(t==="biblija"){const n=s("biblijaSection");n&&(n.style.display=l!=="Ne"?"block":"none")}})}),document.querySelectorAll(".cancel-modal-btn").forEach(o=>{o.addEventListener("click",u)});const e=document.getElementById("krsniSetForm");e&&e.addEventListener("submit",I);const a=document.getElementById("vikForm");a&&a.addEventListener("submit",x);const i=document.getElementById("customSimpleForm");if(i){const o=i.dataset.productName??"";i.addEventListener("submit",t=>E(t,o))}}function S(e){const a=s("deliveryMethodInput");a&&(a.value=e);const i=document.getElementById("chooseLockerBoxnowButton"),o=document.getElementById("open-gls"),t=document.getElementById("deliveryAddressInput");i&&o&&(i.style.display=e==="Boxnow"?"inline-flex":"none",o.style.display=e==="GLS_paketomat"?"inline-flex":"none"),t&&(t.placeholder=e==="GLS_kucna_adresa"?"Upišite adresu za dostavu na kućnu adresu":"Odaberite BoxNow paketomat")}function h(){c("modalContent").innerHTML=z(),c("customizationModal").classList.add("active"),document.body.style.overflow="hidden",v()}function T(){c("modalContent").innerHTML=_(),c("customizationModal").classList.add("active"),document.body.style.overflow="hidden",v()}function $(e){c("modalContent").innerHTML=w(e),c("customizationModal").classList.add("active"),document.body.style.overflow="hidden",v()}function z(){return`
                <h3 style="color: var(--llt-accent-mid);">Prilagodi Krsni Set</h3>
                <form id="krsniSetForm">
                    <div class="mb-3">
                        <label class="form-label" style="color: var(--llt-accent-dark);">Boja krsnog seta:</label>
                        <input type="hidden" name="boja_seta" id="boja_setaInput">
                        <div class="selection-grid mt-2">
                            ${p.bojaSeta.map(e=>`<img src="../images/bojaNadopuna/${e}" data-field="boja_seta" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
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
                                ${p.bojeVrpca.map(e=>`<img src="../images/bojeVrpca/${e}" data-field="boja_vrpce" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Krila na svijeći:</label>
                            <input type="hidden" name="krila" id="krilaInput">
                            <div class="selection-grid mt-2">
                                ${p.krila.map(e=>`<img src="../images/krila/${e}" data-field="krila" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
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
                                ${p.fontoviZaKrsniSet.map(e=>`<img src="../images/fontoviZaKrsniSet/${e}" data-field="font_sredina" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
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
                                ${p.fontoviZaKrsniSet.map(e=>`<img src="../images/fontoviZaKrsniSet/${e}" data-field="font_dolje" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
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
                            <input type="hidden" name="boja_perlica" id="boja_perlicaInput">
                            <div class="selection-grid mt-2">
                                ${p.bojuPerlicaKrunice.map(e=>`<img src="../images/bojuPerlicaKrunice/${e}" data-field="boja_perlica" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
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
            `}function w(e){return`
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
            `}function I(e){e.preventDefault();const a=e.currentTarget;if(!(a instanceof HTMLFormElement))return;const i=new FormData(a),o=Object.fromEntries(i);d.push({product:"Krsni Set",...o}),m(),u()}function x(e){e.preventDefault();const a=e.currentTarget;if(!(a instanceof HTMLFormElement))return;const i=new FormData(a),o=Object.fromEntries(i);d.push({product:"Viktorija Naušnice",...o}),m(),u()}function E(e,a){e.preventDefault();const i=e.currentTarget;if(!(i instanceof HTMLFormElement))return;const o=new FormData(i),t=Object.fromEntries(o);d.push({product:a,...t}),m(),u()}function u(){s("customizationModal")?.classList.remove("active"),document.body.style.overflow="auto";const e=s("modalContent");e&&(e.innerHTML="")}function m(){const e=s("orderSummary"),a=s("cartSection");if(!e||!a)return;if(!d.length){e.value="",a.style.display="none";return}let i="";d.forEach((o,t)=>{i+=`PROIZVOD ${t+1}: ${o.product}
`;for(const[l,r]of Object.entries(o))l!=="product"&&r&&(i+=`  ${l}: ${r}
`);i+=`
`}),e.value=i,a.style.display="block"}function g(){d.length=0,m()}b.clearCart=g;document.querySelectorAll(".customize-btn").forEach(e=>{e.addEventListener("click",function(){const a=this.dataset.productId,i=this.dataset.productName??"";a==="krsni-setovi"?h():a==="nausnice"?T():$(i)})});c("sendCartEmailBtn").addEventListener("click",()=>b.sendCartEmail?.());c("clearCartBtn").addEventListener("click",g);c("customizationModal").addEventListener("click",function(e){e.target===this&&u()});
