package studentapp

class UrlMappings {

    static mappings = {
        delete "/college/$controller/$id(.$format)?"(action:"delete")
        get "/college/$controller(.$format)?"(action:"index")
        get "/college/$controller/$id(.$format)?"(action:"show")
        post "/college/$controller(.$format)?"(action:"save")
        put "/college/$controller/update/$id(.$format)?"(action:"update")
        patch "/college/$controller/$id(.$format)?"(action:"patch")

        "/"(controller: 'application', action:'index')
        "500"(view: '/error')
        "404"(view: '/notFound')
    }
}
