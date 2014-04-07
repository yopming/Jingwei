from bottle import route, run, static_file, jinja2_template as template

# home
@route('/')
@route('/home_home')
def index():
    return template("sources/home/index.html")

@route('/home_new')
def whatsnew():
    return template("sources/home/whatsnew.html")

# skeleton
@route('/skeleton')
@route('/skeleton_global')
def skeleton_global():
    return template("sources/skeleton/global.html")

@route('/skeleton_variable')
def skeleton_variable():
    return template("sources/skeleton/variable.html")

@route('/skeleton_mixin')
def skeleton_mixin():
    return template("sources/skeleton/mixin.html")

@route('/skeleton_construct')
def skeleton_construct():
    return template("sources/skeleton/construct.html")

# elementary
@route('/elementary')
@route('/elementary_typo')
def elementary_typo():
    return template("sources/elementary/typo.html")

@route('/elementary_layout')
def elementary_layout():
    return template("sources/elementary/layout.html")

@route('/elementary_table')
def elementary_table():
    return template("sources/elementary/table.html")

@route('/elementary_form')
def elementary_form():
    return template("sources/elementary/form.html")

@route('/elementary_link')
def elementary_link():
    return template("sources/elementary/link.html")

@route('/elementary_list')
def elementary_list():
    return template("sources/elementary/list.html")

@route('/elementary_icon')
def elementary_icon():
    return template("sources/elementary/icon.html")

@route('/elementary_button')
def elementary_button():
    return template("sources/elementary/button.html")

@route('/elementary_color')
def elementary_color():
    return template("sources/elementary/color.html")

@route('/elementary_html5')
def elementary_html5():
    return template("sources/elementary/html5.html")


# building
@route('/building')
@route('/building_alert')
def building_alert():
    return template("sources/building/alert.html")

@route('/building_status')
def building_status():
    return template("sources/building/status.html")

@route('/building_box')
def building_box():
    return template("sources/building/box.html")

@route('/building_bubble')
def building_bubble():
    return template("sources/building/bubble.html")

@route('/building_captcha')
def building_captcha():
    return template("sources/building/captcha.html")

@route('/building_trans')
def building_trans():
    return template("sources/building/trans.html")

@route('/building_level')
def building_level():
    return template("sources/building/level.html")

@route('/building_modal')
def building_modal():
    return template("sources/building/modal.html")

@route('/building_rmb')
def building_rmb():
    return template("sources/building/rmb.html")

@route('/building_align')
def building_align():
    return template("sources/building/align.html")

@route('/building_nav')
def building_nav():
    return template("sources/building/nav.html")

@route('/building_carousel')
def building_carousel():
    return template("sources/building/carousel.html")

@route('/building_publicida')
def building_publicida():
    return template("sources/building/publicida.html")

@route('/building_tag')
def building_tag():
    return template("sources/building/tag.html")

@route('/building_tab')
def building_tab():
    return template("sources/building/tab.html")

@route('/building_dropdown')
def building_dropdown():
    return template("sources/building/dropdown.html")

@route('/building_evaluate')
def building_evaluate():
    return template("sources/building/evaluate.html")

@route('/building_share')
def building_share():
    return template("sources/building/share.html")


# dictionary
@route('/dictionary')
@route('/dictionary_less')
def dictionary_less():
    return template("sources/dictionary/less.html")

@route('/dictionary_id')
def dictionary_id():
    return template("sources/dictionary/id.html")


@route('/dictionary_class')
def dictionary_class():
    return template("sources/dictionary/class.html")


# static
@route('/assets/<filename:path>')
def return_static(filename):
    return static_file(filename, root='assets')

@route('/css/<filename:path>')
def return_css(filename):
    return static_file(filename, root='css')

@route('/img/<filename:path>')
def return_img(filename):
    return static_file(filename, root='img')

@route('/js/<filename:path>')
def return_js(filename):
    return static_file(filename, root='js')

run(port=3570,host='0.0.0.0')
