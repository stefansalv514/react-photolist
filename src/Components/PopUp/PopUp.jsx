import React from 'react';
import $ from "jquery";



const PopUp = () => {
    return (
        <div className="popup-bacground">
            <div className="popup">
                <form action="" className="form">
                    <div className="form__photo"></div>
                    <input className="form__input" type="text" placeholder="Ваше имя"/>
                    <input className="form__input" type="text" placeholder="Ваш комментарий" />
                    <button className="form__btn">Оставить комментарий</button>
                </form>
                <button className="popup__close">
                    <i className="fal fa-times fa-2x"></i>
                </button>
            </div>
        </div>
    )
}


$(document).ready(function($) {
    // Открыть popup
    $('.photolist__item').click(function() {
        $('.popup-bacground').fadeIn();
        return false;
    });

    // Клик по ссылке "Закрыть".
    $('.popup__close').click(function() {
        $(this).parents('.popup-bacground').fadeOut();
        return false;
    });

    // Закрытие по клавише Esc.
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('.popup-bacground').fadeOut();
        }
    });

    // Клик по фону, но не по окну.
    $('.popup-fade').click(function(e) {
        if ($(e.target).closest('.popup').length == 0) {
            $(this).fadeOut();
        }
    });
});


export default PopUp;