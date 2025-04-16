
 while true do
    Wait(500)
    local playerlist = GetPlayers()
    local players = #playerlist
    TriggerClientEvent("client:updateUI", -1, players)
end
