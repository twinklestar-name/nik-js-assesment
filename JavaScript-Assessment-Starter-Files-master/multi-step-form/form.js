var firstName=$("#first_name")
var contact=$("#contact")
var email=$("#email")
var country=$("#country")

var contactPattern=/^(\+91)?[\d]{10}$/
var emailPattern=/[\w]{1,}@[a-z]{1,10}.(com)/
var firstNamePattern=/^[\w]{1,}$/
var countryPattern=/^[a-z]{1,}$/i
var pattern=/[\w]/
console.log(firstName);

// firstName.on("change",function(e){
//     console.log(e.target.value);
//     var validFirstName=firstNamePattern.test(e.target.value);
//     // if(!valid)
//     // {
//     //     $("#first_name_error").css("display","block");
//     // }
// })
$("#StepOneNext").click(function(e){
    e.preventDefault();
    if(!firstNamePattern.test(firstName.val()))
    {
        $("#first_name_error").css("display","block");
    }
    else if(!emailPattern.test(email.val()))
    {
        $("#email_error").css("display","block");
    }
    else
    {
        $("#StepOneContainer").css("display","none");
        $("#StepTwoContainer").css("display","block");
    }
})
$("#StepTwoPrevious").click(function(e){
    e.preventDefault();
    $("#StepTwoContainer").css("display","none");
    $("#StepOneContainer").css("display","block");
})

$("#StepTwoNext").click(function(e)
{
    e.preventDefault();
    if(!contactPattern.test(contact.val()))
    {
        $("#contact_error").css("display","block");
    }
    else if(!countryPattern.test(country.val()))
    {
        $("#country_error").css("display","block");
    }
    else
    {
        $("#StepTwoContainer").css("display","none");
        $("#StepThreeContainer").css("display","block");
    }
})
$("StepThreePrevious").click(function(e){
    e.preventDefault();

    $("#StepThreeContainer").css("display","none");
    $("#StepTwoContainer").css("display","block");
})
$("#StepThreeSubmit").click(function(e)
{
    e.preventDefault();
    if(!pattern.test($("#message").val()))
    {
        $("#message_error").css("display","block")
    }
    else if(!pattern.test($("#select_program").val()))
    {
        $("#select_program_error").css("display","block");
    }
    else
    {
        $("#StepThreeContainer").css("display","none");
        $("#SuccessContainer").css("display","block");
    }
})
