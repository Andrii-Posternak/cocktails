function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},r=t.parcelRequire58cb;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){a[e]=t},t.parcelRequire58cb=r);var i=r("7Y9D8");r("aa1Sd");var o=r("gGAPY"),s=r("4emys"),d=r("7ExxV"),c=r("4iYcx"),l=r("e6wCE"),g=r("kK2SA");o=r("gGAPY");function f(e){return`<li class="favorite__item" data-id="${e.idIngredient}">\n        <div class="ingredient-card">\n          <h2 class="ingredient-card__title">${e.strIngredient}</h2>\n          <p class="ingredient-card__text">${e.strType||"***"}</p>\n          <div class="buttons-wrap">\n            <button class="button cocktail-card__btn cocktail-card__btn--accent js-btn-more" type="button">\n              Learn more\n            </button>\n            <button class="button cocktail-card__btn cocktail-card__btn--transp cocktail-card__btn--centered js-btn-fav" type="button">\n              ${(0,g.updateFavBtnContent)(e.idIngredient,o.constants.favIngredientStorageKey)}\n            </button>\n          </div>\n        </div>\n      </li>`}var u=r("3TGxB"),v=r("6bDXm"),p=r("jXDaJ");l=r("e6wCE"),p=r("jXDaJ"),c=r("4iYcx");async function b(e,t){const n=(0,l.getFromLocalStorage)(e);if((0,p.showMsgNotAddedCocktailOnFavPage)(n.length,c.elementsRef.notFoundMsgOnFavPageEl),0===n.length)return!1;try{const e=[];for(const a of n){const n=await t(a);e.push(n[0])}return e}catch(e){console.log(e)}}function y(e){0!==e&&((0,d.createPagination)(e,c.elementsRef.ingredientsListEl,f),(0,d.renderGallery)(e,c.elementsRef.ingredientsListEl,f))}r("9MdKn"),r("9MdKn"),window.addEventListener("load",(async function(){const e=await b(o.constants.favIngredientStorageKey,s.getIngredientById);e&&y(e)})),c.elementsRef.ingredientsListEl.addEventListener("click",(async function(e){if(!e.target.closest("BUTTON"))return;const t=e.target.closest("[data-id]"),n=t.dataset.id;e.target.closest(".js-btn-fav")&&((0,l.updateLocalStorage)(n,o.constants.favIngredientStorageKey),t.remove());if(e.target.classList.contains("js-btn-more")){const e=await(0,s.getIngredientById)(n),t=(0,u.createIngredientModalMarkup)(e);(0,v.createIngredientModal)(t,e[0].idIngredient,o.constants.favIngredientStorageKey)}0===c.elementsRef.ingredientsListEl.children.length&&location.reload()})),c.elementsRef.searchFormRef.addEventListener("submit",(async function(t){t.preventDefault();const n=t.target.elements.search.value.trim();if(!n)return void e(i).Notify.warning("Please, enter the correct search query");const a=await b(o.constants.favIngredientStorageKey,s.getIngredientById);if(a){const e=a.filter((e=>e.strIngredient.toUpperCase().includes(n.toUpperCase())));(0,p.showMsgNotFound)(e.length,c.elementsRef.ingredientsListEl,c.elementsRef.paginationEl),y(e)}else e(i).Notify.info("You haven't any favorite ingredients")})),c.elementsRef.themeColorToggleEl.addEventListener("change",(()=>{}));
//# sourceMappingURL=favIngridients.c69ab881.js.map
