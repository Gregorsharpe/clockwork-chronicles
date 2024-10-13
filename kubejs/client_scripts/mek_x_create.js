// priority: 0

console.info('Hello, World! (You will see this line every time client resources reload)')
// Hiding Items
JEIEvents.hideItems(event => {
	event.hide('ad_astra:iron_plate')
	event.hide('thermal:iron_plate')
	event.hide('thermal:gold_plate')
	event.hide('thermal:steel_plate')
	event.hide('enchantinginfuser:enchanting_infuser')
	event.hide('thermal:steel_ingot')
	event.hide('mekanism:ingot_steel')
	event.hide('thermal:steel_nugget')
	event.hide('ad_astra:steel_nugget')
	event.hide('ad_astra:steel_block')
	event.hide('thermal:steel_block')
	event.hide('ad_astra:iron_rod')
	event.hide('thermal:lead_dust')
	event.hide('thermal:tin_dust')
	event.hide('thermal:gold_dust')
	event.hide('thermal:iron_dust')
	event.hide('thermal:copper_dust')
	event.hide('thermal:lapis_dust')
	event.hide('thermal:sawdust')
	event.hide('thermal:emerald_dust')
	event.hide('thermal:diamond_dust')
	event.hide('createaddition:diamond_grit')
	event.hide('thermal:tin_ingot')
	event.hide('thermal:steel_dust')
	event.hide('buzzier_bees:honey_apple')
	event.hide('thermal:lead_ingot')
	event.hide('thermal:bronze_ingot')
	event.hide('thermal:bronze_nugget')
	event.hide('thermal:bronze_block')
	event.hide('thermal:copper_plate')
	event.hide('thermal:copper_nugget')
	event.hide('thermal:bronze_dust')
	event.hide('ad_astra:nasa_workbench')
	event.hide('ad_astra_giselle_addon:automation_nasa_workbench')
	event.hide('thermal:lead_nugget')
	event.hide('kubejs:incomplete_logic_mechanism')
	event.hide('kubejs:incomplete_basic_mechanism')
	event.hide('thermal:sulfur_dust')
	event.hide('thermal:netherite_nugget')
	event.hide('thermal:netherite_dust')
	event.hide('kubejs:incomplete_rocket_nose_cone')
	event.hide('kubejs:incomplete_steel_engine')
	event.hide('kubejs:incomplete_desh_engine')
	event.hide('kubejs:incomplete_ostrum_engine')
	event.hide('kubejs:incomplete_calorite_engine')
	event.hide('kubejs:incomplete_processor')
	event.hide('kubejs:incomplete_basic_control_circuit')
	event.hide('mekanism:module_energy_unit')
	event.hide('kubejs:incomplete_guidance_mechanism')
	event.hide('kubejs:incomplete_musket')
	event.hide('mekanism:bio_fuel')
	event.hide('ad_astra:fuel_bucket')
	event.hide('ad_astra:fuel_refinery')
	event.hide('grapplemod:repeller')
	event.hide('ad_astra:astrodux')
	event.hide('kubejs:stellarite_ore')
	event.hide('simplemusket:netherite_bullet')
	event.hide('quark:purpur_chest')
	event.hide('quark:purpur_trapped_chest')
	event.hide(Item.of('minecraft:enchanted_book').enchant('ad_astra_giselle_addon:space_breathing', 1))
	event.hide(Item.of('minecraft:enchanted_book').enchant('ad_astra_giselle_addon:space_fire_proof', 1))
	event.hide(Item.of('minecraft:enchanted_book').enchant('ad_astra_giselle_addon:acid_rain_proof', 1))
	event.hide(Item.of('minecraft:enchanted_book').enchant('ad_astra_giselle_addon:gravity_normalizing', 1))
	event.hide('kubejs:ground_sifter_side')
})

// Hiding Fluids
JEIEvents.hideFluids(event => {
	event.hide('ad_astra:fuel')
})
// Adding Items To JEI
JEIEvents.addItems(event => {
	event.add('create:shadow_steel')
	event.add('create:chromatic_compound')
  })
ClientEvents.highPriorityAssets(event => {
    event.addLang('gas.kubejs.helium3', "Helium-3")
	event.addLang('gas.kubejs.refined_stellarite', "Refined Stellarite")
	event.addLang('gas.kubejs.unrefined_stellarite', "Unrefined Stellarite")
    event.addLang('slurry.kubejs.dirty_silica_slurry', "Dirty Silica Slurry")
    event.addLang('slurry.kubejs.clean_silica_slurry', "Clean Silica Slurry")
	event.addLang('slurry.kubejs.dirty_rare_metal_slurry', "Dirty Rare Metal Slurry")
	event.addLang('slurry.kubejs.clean_rare_metal_slurry', "Clean Rare Metal Slurry")
})