const pageCourseSettings = (function pageCourseSettings()
{
    function isCourseSettingsPage()
    {
        return window.location.href.includes('/settings');
    }

    function getResetCourseButton()
    {
        return document.getElementById('right-side-wrapper').getElementsByClassName('reset_course_content_button')[0];
    }

    return {
        isCourseSettingsPage: isCourseSettingsPage,
        getResetCourseButton: getResetCourseButton
    }

})();