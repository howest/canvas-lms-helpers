const pageCourseUsers = (function pageCourseUsers()
{
    function isCourseUsersPage()
    {
        return window.location.href.includes('/users');
    }

    function getActionsBar()
    {
        return document.getElementById('group_categories_tabs').getElementsByClassName('group-categories-actions')[0];
    }

    function getAddUsersBtn()
    {
        return document.getElementById('addUsers');
    }

    return {
        isCourseUsersPage: isCourseUsersPage,
        getActionsBar: getActionsBar,
        getAddUsersBtn: getAddUsersBtn
    }

})();