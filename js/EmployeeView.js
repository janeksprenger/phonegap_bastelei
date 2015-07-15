/**
 * Created by jsprenger on 15.07.15.
 */
var EmployeeView = function (employee) {

    this.addLocation = function(event) {
        event.preventDefault();
        console.log('addLocation');
        navigator.geolocation.getCurrentPosition(
            function(position) {
                $('.location', this.el).html(position.coords.latitude + ',' + position.coords.longitude);
            },
            function() {
                alert('Error getting location');
            });
        return false;
    };

    this.initialize = function () {
        this.el = $('<div/>');
        this.el.on('click', '.add-location-btn', this.addLocation);
    };

    this.initialize();

    this.render = function() {
        this.el.html(EmployeeView.template(employee));
        return this;
    };


}

EmployeeView.template = Handlebars.compile($("#employee-tpl").html());