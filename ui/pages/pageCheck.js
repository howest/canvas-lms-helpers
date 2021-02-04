const pageCheck = (function pageCheck()
{
    function isPage(target)
    {
        return window.location.href.includes(target);
    }

    return {
        isPage: isPage
    }
})();