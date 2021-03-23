// Ajax mailchimp success message
var $form = $('.mailing-list form');
$form.submit(function(e) {
    e.preventDefault(); // avoid to execute the actual submit of the form.
    var form = $(this);
    var url = form.attr('action');
    console.log(url)
    $.ajax({
        type: "POST",
        url: url,
        dataType: 'json',
        data: form.serialize(), // serializes the form's elements.
        error: function(err){
            alert(data['msg'])
        },
        success: function(data)
        {
            if (data.result != "success") {
                alert('Something missing!')
            } else {
                window.location = '/thank-you/';
            }
        }
    });
    return false;
});