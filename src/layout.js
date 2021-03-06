function acessibilidade() {
    var limite   = 10,
    cont     = 0,
    target   = 'h1, h2, h3, h4, h5, h6, p, blockquote, li, a, span, td, th, section, article, div.conteudo',
    increase = $("a[rel='increase-font']"),
    decrease = $("a[rel='decrease-font']"),
    area = $('.container');

    increase.click(function(){
        area.find(target).each(function(){
            var self = $(this), size = parseInt(self.css('font-size').substring(0,2));
            cont!=limite ? self.css('font-size', (size+1)) : '';
        });
        cont!=limite ? cont++ : '';
        return false;
    });

    decrease.click(function(){
        area.find(target).each(function(){
            var self = $(this), size = parseInt(self.css('font-size').substring(0,2));
            cont!=0 ? self.css('font-size', (size-1)) : '';
        });
        cont!=0 ? cont-- : '';
        return false;
    });
}

$(document).ready(function(){
    acessibilidade();
});