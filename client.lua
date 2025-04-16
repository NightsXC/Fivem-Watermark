RegisterNetEvent("client:updateUI", function(players)
    local id = GetPlayerServerId(PlayerId())

    local year, month, day, hour, minute, second = GetLocalTime()

    local date = {
        year  = year,
        month = month,
        day   = day,
    }
    
    local time = {
        hours   = hour,
        minutes = minute,
        seconds = second,
    }

    SendNUIMessage({
        id = id,
        players = players,
        date = date,
        time = time,
    })
end)

RegisterCommand("updateUI", function()
    TriggerEvent("client:updateUI")
end)