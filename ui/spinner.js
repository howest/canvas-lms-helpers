class CustomSpinner
{
    constructor(id)
    {
        this.id = id;
    }

    html()
    {
        let div = document.createElement("div");
        div.id = this.id;
        div.style.cssText = 'display: none;width: 50px;height: 50px;border: 10px solid #008ee230;border-radius: 50%;border-top-color: #44c8f5;position: absolute;z-index: 2000000000;left: 45%;top: 45%;';
        return div;
    }

    animate()
    {
        document.getElementById(this.id).animate([
            {transform: 'rotate(360deg)'}
        ], {
            duration: 1000,
            easing: 'cubic-bezier(0.42, 0, 0.58, 1)',
            iterations: Infinity
        });
    }
}
