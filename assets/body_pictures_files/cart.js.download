/**
 * Mozello Catalog Cart Actions
 */
function mozCatalogCart()
{
    this.initAddToCartButtons();
}

/*** Init ***/

mozCatalogCart.prototype.initAddToCartButtons = function()
{
    var base = this,
        country = null;

    $(".moze-add-to-cart.moze-added-to-cart")
        .attr("href", "javascript:;")
        .off();

    $(".moze-add-to-cart:not(.moze-added-to-cart)").each(function() {

        // Step 1

        var slot = $(this).parents(".cat-thumb");
        if (slot.length != 1) {
            return;
        }

        var catItemID = slot.attr("data-cat-item-id");
        if (typeof catItemID == "undefined" || catItemID < 1) {
            return null;
        }

        if (typeof mozCatItems == "undefined") {
            return null;
        }

        var mozCatItemIndex = null;
        var mozCatItem = null;

        $.each(mozCatItems, function(index, item) {
            if (item.id == catItemID) {
                mozCatItemIndex = index;
                mozCatItem = item;
                return false;
            }
        });

        if (!mozCatItem) {
            return null;
        }

        // Step 2

        var isAvailable =
            mozCatItem.stock === null ||
            mozCatItem.stock > 0;

        var isLastItem = mozCatItem.stock == 1;

        if (isAvailable) {
            $(this)
                .attr("href", "javascript:;")
                .html(mozLocalization.cmCatalogCartAdd)
        }
        else {
            $(this)
                .attr("href", $(slot).attr("data-cat-item-link"))
                .html(mozLocalization.cmCatalogCartView);
        }

        // Step 3

        $(this).off();

        if (!isAvailable) {
            return;
        }

        $(this).on("click", function() {

            var addToCartBtn = $(this),
                catItemThumb = $(addToCartBtn).parents('.cat-thumb[data-cat-item-link]');

            (function(callback) {
                if (country == null) {
                    $.ajax({
                        url: "https://www.mozello.com/apps/geo/",
                        success: function(response) {
                            country = response.country;
                            callback();
                        }
                    });
                } else {
                    callback();
                }
            }) (function() {

                new mozLive3({
                    source: {
                        name: "maincatalog",
                        superglobal: 1
                    },
                    action: "catalog-add-to-cart",
                    parameters: {
                        cat_item_id: mozCatItem.id,
                        cat_item_variant_id: 0,
                        cat_item_variant_text: '',
                        cart_name: "maincatalogcart",
                        country: country
                    },
                    response: {
                        html: [
                            { name: "maincatalogcart" },
                            { name: "maincatalogcartside", target: "#shopbar-sidecart-base" }
                        ]
                    },
                    errors: {
                        maintenance: mozLocalization.erInMaintenanceMode
                    },
                    onComplete: function () {

                        initCart();
                        if ($(".shopbar-cart").is(":visible") && !$("#shopbar-sidecart").is(":visible")) {
                            $(".shopbar-cart").first().trigger("click");
                        }
                        syncCartToLocalStorage();

                        $(addToCartBtn)
                            .addClass("moze-added-to-cart")
                            .html(mozLocalization.cmCatalogCartAdded);
                        var itemLink = catItemThumb.attr('data-cat-item-link');
                        if (itemLink) {
                            $(addToCartBtn)
                                .off('click')
                                .attr('href', itemLink);
                        }

                        if (typeof mozCatItem.pixel !== 'undefined') {
                            base.gtagAddToCart(
                                mozCatItem.pixel.id,
                                mozCatItem.pixel.name,
                                mozCatItem.pixel.brand,
                                mozCatItem.pixel.category,
                                mozCatItem.pixel.currency,
                                mozCatItem.pixel.price,
                                1
                            );
                            base.fbqAddToCart(
                                mozCatItem.pixel.id,
                                mozCatItem.pixel.currency,
                                mozCatItem.pixel.price,
                                1
                            );
                        }
                    }
                });
            });
        });
    });
}

/*** Helpers ***/

mozCatalogCart.prototype.gtagAddToCart = function(id, name, brand, category, currency, price, quantity)
{
    if (typeof gtag != "function") {
        return;
    }

    gtag("event", "add_to_cart", {
        currency: currency,
        items: [{
            id: id,
            name: name,
            brand: brand,
            category: category,
            price: price,
            quantity: quantity
        }],
        value: price * quantity
    });
}

mozCatalogCart.prototype.fbqAddToCart = function(id, currency, price, quantity)
{
    if (typeof fbq != "function") {
        return;
    }

    fbq("track", "AddToCart", {
        content_ids: [id],
        content_type: "product",
        contents: [{ id: id, quantity: quantity }],
        currency: currency,
        value: price * quantity
    });
}

/*** Initialization ***/

function reinitMozCatalogCartActions()
{
    new mozCatalogCart();
}

$(document).ready(function() {
    reinitMozCatalogCartActions();
});

/*** End ***/