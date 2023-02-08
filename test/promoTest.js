const promoTest = require('../promo');
const assert = require('assert');

describe(`calcul de promotion en retournant ensuite un Number avec le nouveau prix`, () => {
	it(`Devrait retourner 0 ou le prix init`, () => {
		assert.equal(promoTest(0, 100), 0);
	});
	it(`Devrait retourner result`, () => {
		assert.equal(promoTest(10, 50), 5);
	});
	it(`devrait tester la valeur si chaine de caractère`, function () {
		assert.equal(promoTest('Je suis isNAN', 50), false, 'échoue car nous avons une erreur dans saisie nb dans promoTest');
	});
});
