module.exports = {
  params: {
    designator: 'S',
    from: undefined,
    to: undefined
  },
  body: p => {
    return `
(footprint "Cherry_ULP_SMD" (version 20221018) (generator pcbnew)
  ${p.at /* parametric position */}

        (property "Reference" "${p.ref}"
            (at 0 0 ${p.r})
            (layer "F.SilkS")
            ${p.ref_hide}
            (effects (font (size 1 1) (thickness 0.15)))
        )
  (layer "F.Cu")
  (attr smd)
  (fp_rect (start -7.1 -6.4) (end 7.1 6.4)
    (stroke (width 0.1) (type solid)) (fill none) (layer "F.SilkS") (tstamp 784e3de1-efd8-4453-8fdd-c88aa0b88646))
  (fp_rect (start -3.6 -1.8) (end 3.1 -4.2)
    (stroke (width 0.05) (type solid)) (fill none) (layer "Dwgs.User") (tstamp d8a1680a-085b-47fe-af9c-5c222413ba85))
  (fp_rect (start -6.8 -6.1) (end 6.8 6.1)
    (stroke (width 0.1) (type solid)) (fill none) (layer "F.CrtYd") (tstamp fbad4ed2-ff86-407e-b1ea-204acdbbbd27))
  (pad "" np_thru_hole circle (at -5.8 1.2) (size 1.05 1.05) (drill 1.05) (layers "F&B.Cu" "*.Mask") (tstamp 17a4b606-baf4-4723-b84a-2637ff128782))
  (pad "" np_thru_hole circle (at 5.8 -3.26) (size 1.2 1.2) (drill 1.2) (layers "F&B.Cu" "*.Mask") (tstamp 9c58b86f-4eea-4649-9265-0492ac0b7ae4))
  (pad "" np_thru_hole circle (at 5.8 3.26) (size 1.2 1.2) (drill 1.2) (layers "F&B.Cu" "*.Mask") (tstamp 35cfdc62-2e93-4452-886a-9ac9df78b6a1))
  (pad "1" smd rect (at -0.65 2.3) (size 0.7 3.4) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp 6cf67b9b-27eb-4963-8261-c3ccef2aa742) ${p.from})
  (pad "2" smd rect (at 1.8 2.3) (size 0.7 3.4) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp 6d6168ff-1ec3-417e-9157-603116cd4573) ${p.to})
  (pad "3" smd rect (at -6.2 -3.9) (size 1.6 3.8) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp 8ac288d5-c9c6-40c1-9b06-4c8074e60637))
  (pad "3" smd rect (at -6.2 4.5) (size 1.6 3) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp 71041669-366b-47dc-98fd-369c0f6b7445))
  (pad "3" smd rect (at 6.2 -5.025) (size 1.6 1.8) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp 1cd55d35-d9c0-49b0-8004-75fab80d52c3))
  (pad "3" smd rect (at 6.2 0) (size 1.6 2.6) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp 2e9b1d0d-d760-4f41-b42f-89e5dbdf4fea))
  (pad "3" smd rect (at 6.2 5.025) (size 1.6 1.8) (layers "F.Cu" "F.Paste" "F.Mask") (tstamp 54088d02-e7ee-42c6-b650-e622a5a009ed))
  (zone (net 0) (net_name "") (layer "Dwgs.User") (tstamp 29019da4-61c2-46ac-9caa-24cb07ec47b4) (hatch edge 0.508)
    (connect_pads (clearance 0))
    (min_thickness 0.254) (filled_areas_thickness no)
    (keepout (tracks not_allowed) (vias not_allowed) (pads not_allowed) (copperpour not_allowed) (footprints allowed))
    (fill (thermal_gap 0.508) (thermal_bridge_width 0.508))
    (polygon
      (pts
        (xy -1.2 4.2)
        (xy -5 4.2)
        (xy -5 2.2)
        (xy -1.2 2.2)
      )
    )
  )
)
`
  }
}
