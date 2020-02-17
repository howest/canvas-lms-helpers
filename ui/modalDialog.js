class ModalDialog
{
    constructor(id)
    {
        this.id = id;
    }

    /**
     * Creates and appends a button that will be used to open the dialog
     * @param text
     * @param appendTo
     */
    createOpenDialogBtn(text, appendTo)
    {
        let btn = $('<button class="element_toggler btn btn-primary" style="float: left; margin-right: 5px;" aria-controls="'+this.id+'" aria-label="Toggle '+this.id+' modal">' + text + '</button>');
        btn.appendTo(appendTo);
    }

    /**
     * Creates a dialog and appends it to the body
     * @param title
     * @param content
     * @param actionBtns
     */
    createDialog(title, content, actionBtns)
    {
        let modal = document.createElement("div");
        modal.innerHTML =
            '<div id="' + this.id + '" style="display: none;">'
                + '<div class="ui-widget-overlay container middle-xs center-xs" style="text-align: left; display: flex; position: fixed; z-index: 11; left: 84px; top: 0; width: 100%; height: 100%;">'
                    + '<div id="' + this.id + '-dialog" class="ui-dialog ui-widget ui-widget-content ui-corner-all box-shadow" style="position: absolute; width: 100vw; max-width: 600px;">'
                        + '<div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix">'
                            + '<span class="ui-dialog-title" role="heading" aria-level="2">' + title + '</span>'
                            + '<button class="ui-dialog-titlebar-close ui-corner-all element_toggler" aria-controls="' + this.id + '" aria-label="Toggle ' + this.id + ' modal">'
                                + '<span class="ui-icon ui-icon-closethick">close</span>'
                            + '</button>'
                        + '</div>'
                        + '<div id="' + this.id + '-form-dialog" class="ui-dialog-content form-dialog">'
                            + '<div>'
                                + content
                                + '<p id="' + this.id + '-alert" class="alert alert-info" style="display:none"></p>'
                            + '</div>'
                            + '<div class="form-controls text-right">'
                                + '<a id="' + this.id + '-close" class="element_toggler btn ui-corner-all" role="button" aria-controls="' + this.id + '" aria-label="Toggle ' + this.id + ' modal"> <span class="ui-button-text">Close</span></a>'
                                + actionBtns
                            + '</div>'
                        + '</div>'
                    + '</div>'
                + '</div>'
            + '</div>';

        //append dialog to document
        document.body.appendChild(modal);
        //add a spinner
        this.addSpinner(this.id + '-spinner');
        //set listeners to close the dialog
        this.setCloseListeners();
    }

    /**
     * Creates a spinner and appends it to the dialog
     * @param id
     */
    addSpinner(id)
    {
        let spinner = new CustomSpinner(id);
        document.getElementById(this.id + '-dialog').append(spinner.html());
        spinner.animate();
    }

    /**
     * Add event listeners to close the dialog
     */
    setCloseListeners()
    {
        let alert = document.getElementById(this.id + '-alert');
        [...document.getElementById(this.id).getElementsByClassName('close-dialog')].forEach(function(item) {
            item.addEventListener('click', function() {
                alert.style.display = 'none';
            });
        });
    }

}