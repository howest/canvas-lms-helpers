const pageCourseSections = (function pageCourseSections()
{
    function isCourseSectionsPage()
    {
        return window.location.href.includes('/sections');
    }

    function getSisID()
    {
        return document.getElementsByClassName('sis_source_id')[0];
    }

    function getXListForm()
    {
        return document.getElementById('crosslist_course_form');
    }

    return {
        isCourseSectionsPage: isCourseSectionsPage,
        getSisID: getSisID,
        getXListForm: getXListForm
    }

})();