!function(){var e={delay:document.querySelector('input[name="delay"]'),step:document.querySelector('input[name="step"]'),amount:document.querySelector('input[name="amount"]'),submitBtn:document.querySelector('button[type="submit"]')};function t(e,t){var n=Math.random()>.3;return new Promise((function(o,u){setTimeout((function(){n?o({position:e,delay:t}):u({position:e,delay:t})}),t)}))}e.submitBtn.addEventListener("click",(function(n){n.preventDefault();for(var o=Number(e.delay.value),u=Number(e.step.value),a=Number(e.amount.value),c=1;c<=a;c+=1)t(c,o).then((function(e){var t=e.position,n=e.delay;console.log("✅ Fulfilled promise ".concat(t," in ").concat(n,"ms"))})).catch((function(e){var t=e.position,n=e.delay;console.log("❌ Rejected promise ".concat(t," in ").concat(n,"ms"))})),o+=u}))}();
//# sourceMappingURL=03-promises.f637ee95.js.map
