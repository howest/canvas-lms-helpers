const pageCourseGroups = (function pageCourseGroups()
{
    function isCourseGroupsPage()
    {
        return window.location.href.includes('/groups');
    }

    function getActionsBar()
    {
        return document.getElementById('group_categories_tabs').getElementsByClassName('group-categories-actions')[0];
    }

    return {
        isCourseGroupsPage: isCourseGroupsPage,
        getActionsBar: getActionsBar,
    }

})();