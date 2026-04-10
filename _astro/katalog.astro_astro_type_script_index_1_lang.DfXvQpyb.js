window.cart=[];window.contactEmail="info@lovellthings.com";Array.from({length:30},(e,a)=>({name:`Boja ${a+1}`,value:`Boja ${a+1}`}));const u=Array.from({length:43},(e,a)=>({name:`Boja ${a+1}`,value:`Boja ${a+1}`})),n={bojaSeta:["Srebrna.jpeg","Zlatna.jpeg","Rose.jpeg"],fontoviZaKrsniSet:["TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg"],bojeVrpca:["TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg"],krila:["Ne.jpeg","Da.jpeg"],maramica:["TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg"],bojuPerlicaKrunice:["TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg","TestSlika.jpeg"]};function m(){document.querySelectorAll(".option-card, .option-image").forEach(o=>{o.addEventListener("click",function(){const t=this.dataset.field,i=this.dataset.value;if(!t||!i)return;const s=document.getElementById(`${t}Input`);if(s){if(s.value=i,document.querySelectorAll(`.option-card[data-field="${t}"], .option-image[data-field="${t}"]`).forEach(r=>r.classList.remove("selected")),this.classList.add("selected"),t==="krunica"&&(document.getElementById("krunicaSection").style.display=i==="Da"?"block":"none"),t==="biblija"&&(document.getElementById("biblijaSection").style.display=i!=="Ne"?"block":"none"),t==="par"){const r=i!=="Samo nadopuna",p=i!=="Samo baza";document.getElementById("bazaSection").style.display=r?"block":"none",document.getElementById("nadopunaSection").style.display=p?"block":"none"}t==="deliveryMethod"&&b(i)}})}),document.querySelectorAll("select").forEach(o=>{o.addEventListener("change",function(){const t=this.dataset.field,i=this.value;if(!t||!i)return;const s=document.getElementById(`${t}Input`);s&&(s.value=i),t==="krunica"&&(document.getElementById("krunicaSection").style.display=i==="Da"?"block":"none"),t==="biblija"&&(document.getElementById("biblijaSection").style.display=i!=="Ne"?"block":"none")})}),document.querySelectorAll(".cancel-modal-btn").forEach(o=>{o.addEventListener("click",d)});const e=document.getElementById("krsniSetForm");e&&e.addEventListener("submit",S);const a=document.getElementById("vikForm");a&&a.addEventListener("submit",h);const l=document.getElementById("customSimpleForm");if(l){const o=l.dataset.productName;l.addEventListener("submit",t=>T(t,o))}}function b(e){document.getElementById("deliveryMethodInput").value=e;const a=document.getElementById("chooseLockerBoxnowButton"),l=document.getElementById("open-gls"),o=document.getElementById("deliveryAddressInput");a&&l&&(a.style.display=e==="Boxnow"?"inline-flex":"none",l.style.display=e==="GLS_paketomat"?"inline-flex":"none"),o&&(o.placeholder=e==="GLS_kucna_adresa"?"Upišite adresu za dostavu na kućnu adresu":"Odaberite adresu paketomata")}function v(){document.getElementById("modalContent").innerHTML=y(),document.getElementById("customizationModal").classList.add("active"),document.body.style.overflow="hidden",m()}function j(){document.getElementById("modalContent").innerHTML=f(),document.getElementById("customizationModal").classList.add("active"),document.body.style.overflow="hidden",m()}function g(e){document.getElementById("modalContent").innerHTML=k(e),document.getElementById("customizationModal").classList.add("active"),document.body.style.overflow="hidden",m()}function y(){return`
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
                        <label class="form-label" style="color: var(--llt-accent-dark);">Ime osobe koja se krsti:</label>
                        <input type="text" name="ime_osobe" class="form-control" required style="border: 1px solid var(--llt-accent-mid);">
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
                            <label class="form-label" style="color: var(--llt-accent-dark);">Poruka sredina kutije (max 60 znakova):</label>
                            <textarea name="poruka_sredina" class="form-control" maxlength="60" rows="2" style="border: 1px solid var(--llt-accent-mid);"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Font sredina:</label>
                            <input type="hidden" name="font_sredina" id="font_sredinaInput">
                            <div class="selection-grid mt-2">
                                ${n.fontoviZaKrsniSet.map(e=>`<img src="../images/fontoviZaKrsniSet/${e}" data-field="font_sredina" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Poruka dolje kutije (max 60 znakova):</label>
                            <textarea name="poruka_dolje" class="form-control" maxlength="60" rows="2" style="border: 1px solid var(--llt-accent-mid);"></textarea>
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
                            <label class="form-label" style="color: var(--llt-accent-dark);">Poruka na majici (max 60 znakova):</label>
                            <textarea name="poruka_majica" class="form-control" maxlength="60" rows="2" style="border: 1px solid var(--llt-accent-mid);"></textarea>
                        </div>
                        <div class="mb-3">
                            <label class="form-label" style="color: var(--llt-accent-dark);">Font majica:</label>
                            <input type="hidden" name="font_majica" id="font_majicaInput">
                            <div class="selection-grid mt-2">
                                ${n.fontoviZaKrsniSet.map(e=>`<img src="../images/fontoviZaKrsniSet/${e}" data-field="font_majica" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
                            </div>
                        </div>
                    </div>

                    <div class="border-bottom py-3 my-3">
                        <h5 style="color: var(--llt-accent-mid);">Maramica</h5>
                        <input type="hidden" name="stil_maramice" id="stil_maramiceInput">
                        <div class="selection-grid mt-2">
                            ${n.maramica.map(e=>`<img src="../images/maramica/${e}" data-field="stil_maramice" data-value="${e.replace(/\.(jpg|jpeg|png|gif|webp)$/i,"")}" class="option-image" alt="${e}">`).join("")}
                        </div>
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
                        <div class="image-grid mt-2">
                            ${u.map((e,a)=>`<button type="button" class="option-card image-option" data-field="boja_nadopune" data-value="${e.value}" style="background-image: url('../images/ViktorijaNausnice/Viktorija (${a+1}).jpeg');" aria-label="${e.name}"></button>`).join("")}
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
            `}function S(e){e.preventDefault();const a=new FormData(document.getElementById("krsniSetForm")),l=Object.fromEntries(a);cart.push({product:"Krsni Set",...l}),c(),d()}function h(e){e.preventDefault();const a=new FormData(document.getElementById("vikForm")),l=Object.fromEntries(a);cart.push({product:"Viktorija Naušnice",...l}),c(),d()}function T(e,a){e.preventDefault();const l=new FormData(document.getElementById("customSimpleForm")),o=Object.fromEntries(l);cart.push({product:a,...o}),c(),d()}function d(){document.getElementById("customizationModal").classList.remove("active"),document.body.style.overflow="auto",document.getElementById("modalContent").innerHTML=""}function c(){const e=document.getElementById("orderSummary");if(!cart.length){e.value="",document.getElementById("cartSection").style.display="none";return}let a="";cart.forEach((l,o)=>{a+=`PROIZVOD ${o+1}: ${l.product}
`;for(const[t,i]of Object.entries(l))t!=="product"&&i&&(a+=`  ${t}: ${i}
`);a+=`
`}),e.value=a,document.getElementById("cartSection").style.display="block"}function $(){cart.length=0,c()}document.querySelectorAll(".customize-btn").forEach(e=>{e.addEventListener("click",function(){const a=this.dataset.productId,l=this.dataset.productName;a==="krsni-setovi"?v():a==="nausnice"?j():g(l)})});document.getElementById("sendCartEmailBtn").addEventListener("click",sendCartEmail);document.getElementById("clearCartBtn").addEventListener("click",$);document.getElementById("customizationModal").addEventListener("click",function(e){e.target===this&&d()});
