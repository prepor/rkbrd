
module.exports = {
  params: {
    designator: 'MCU',
    VCC5: { type: 'net', value: 'VCC5' },
    GND: { type: 'net', value: 'GND' },
    VCC3: { type: 'net', value: 'VCC3' },
    RST: { type: 'net', value: 'RST' },
    BATP: { type: 'net', value: 'BATP' },
    BATM: { type: 'net', value: 'BATM' },
    P0: { type: 'net', value: 'P0' },
    P1: { type: 'net', value: 'P1' },
    P2: { type: 'net', value: 'P2' },
    P3: { type: 'net', value: 'P3' },
    P4: { type: 'net', value: 'P4' },
    P5: { type: 'net', value: 'P5' },
    P6: { type: 'net', value: 'P6' },
    P7: { type: 'net', value: 'P7' },
    P8: { type: 'net', value: 'P8' },
    P9: { type: 'net', value: 'P9' },
    P10: { type: 'net', value: 'P10' }
  },
  body: p => {
    return `
    (footprint "xiao-ble-smd-cutout"
      ${p.at /* parametric position */}

      (property "Reference" "${p.ref}"
          (at 0 0 ${p.r})
          (layer "F.SilkS")
          ${p.ref_hide}
          (effects (font (size 1 1) (thickness 0.15)))
      )
      (layer "B.Cu")
      (uuid "1f19eef9-c894-44cc-909b-de3e8338c542")
      (at 0 0 -90)
      (attr smd exclude_from_pos_files)
      (fp_rect
        (start 3.350197 10.849813)
        (end 5.128197 8.182813)
        (stroke (width 0.12) (type solid))
        (fill no)
        (layer "Dwgs.User")
        (uuid "c5078a87-9271-4829-a451-4dcc2a3eebc4")
      )
      (fp_rect
        (start -3.507811 8.182813)
        (end -5.285811 10.849813)
        (stroke (width 0.12) (type solid))
        (fill no)
        (layer "Dwgs.User")
        (uuid "7b0312b9-a0c3-4646-8ce2-a068651b7276")
      )
      (fp_rect
        (start -5.285811 6.785813)
        (end -3.507811 4.118813)
        (stroke (width 0.12) (type solid))
        (fill no)
        (layer "Dwgs.User")
        (uuid "36002535-53e5-49f2-8373-0202ab561953")
      )
      (fp_rect
        (start 3.350197 6.785813)
        (end 5.128197 4.118813)
        (stroke (width 0.12) (type solid))
        (fill no)
        (layer "Dwgs.User")
        (uuid "c1cec806-bb9c-4905-a23b-43a9cf5c9d59")
      )
      (fp_rect
        (start -8.89 -10.5)
        (end 8.89 10.5)
        (stroke (width 0.12) (type solid))
        (fill no)
        (layer "Dwgs.User")
        (uuid "daa6095b-1b9c-444a-a289-f8f77476467f")
      )
      (fp_line
        (start -0.8382 8.826)
        (end 0.8382 8.826)
        (stroke (width 0.12) (type solid))
        (layer "Edge.Cuts")
        (uuid "e8b9545e-5a29-45a2-adff-f3df85d45ced")
      )
      (fp_line
        (start -1.524 6.4638)
        (end -1.524 8.1402)
        (stroke (width 0.12) (type solid))
        (layer "Edge.Cuts")
        (uuid "fc7f6b21-205e-4b72-92cb-97cc5a2b974d")
      )
      (fp_line
        (start 1.524 6.4638)
        (end 1.524 8.1402)
        (stroke (width 0.12) (type solid))
        (layer "Edge.Cuts")
        (uuid "6a5461cf-713a-48d1-8025-117f895abdf6")
      )
      (fp_line
        (start -0.8382 5.778)
        (end 0.8382 5.778)
        (stroke (width 0.12) (type solid))
        (layer "Edge.Cuts")
        (uuid "e1ee4f47-bf7d-44b7-872f-0b16973a667a")
      )
      (fp_line
        (start -4.0132 2.476)
        (end -2.413 2.476)
        (stroke (width 0.12) (type solid))
        (layer "Edge.Cuts")
        (uuid "5dc87006-b691-4a64-ab32-9eee33e6f188")
      )
      (fp_line
        (start -2.032 2.095)
        (end -2.032 0.444)
        (stroke (width 0.12) (type solid))
        (layer "Edge.Cuts")
        (uuid "01299e9f-b3b4-4214-8ca6-a1fdfad401f7")
      )
      (fp_line
        (start -4.699 0.7488)
        (end -4.699 1.7902)
        (stroke (width 0.12) (type solid))
        (layer "Edge.Cuts")
        (uuid "beb8d6b5-6c1a-4d31-bbcd-0b4d01b6f613")
      )
      (fp_line
        (start -2.413 0.063)
        (end -4.0132 0.063)
        (stroke (width 0.12) (type solid))
        (layer "Edge.Cuts")
        (uuid "82060784-8cfc-4638-bb57-8fe945ff7ee2")
      )
      (fp_arc
        (start 0.8382 8.826)
        (mid 0.920393 8.222393)
        (end 1.524 8.1402)
        (stroke (width 0.12) (type solid))
        (layer "Edge.Cuts")
        (uuid "194f12f7-bb8a-4273-8665-a9eb32a7ac6d")
      )
      (fp_arc
        (start -1.524 8.1402)
        (mid -0.920391 8.222391)
        (end -0.8382 8.826)
        (stroke (width 0.12) (type solid))
        (layer "Edge.Cuts")
        (uuid "b11f6b41-e9e7-40ad-b1d0-b5626092746f")
      )
      (fp_arc
        (start 1.524 6.4638)
        (mid 0.920391 6.381609)
        (end 0.8382 5.778)
        (stroke (width 0.12) (type solid))
        (layer "Edge.Cuts")
        (uuid "5796a9e6-e6c6-4131-b596-6020af05ad84")
      )
      (fp_arc
        (start -0.8382 5.778)
        (mid -0.920391 6.381609)
        (end -1.524 6.4638)
        (stroke (width 0.12) (type solid))
        (layer "Edge.Cuts")
        (uuid "8450e689-54a0-42da-a7c9-c5324275bf71")
      )
      (fp_arc
        (start -2.032 2.095)
        (mid -2.143592 2.364408)
        (end -2.413 2.476)
        (stroke (width 0.12) (type solid))
        (layer "Edge.Cuts")
        (uuid "f9ab379b-3fb4-4603-9db9-e452d4502c14")
      )
      (fp_arc
        (start -4.699 1.7902)
        (mid -4.095391 1.872391)
        (end -4.0132 2.476)
        (stroke (width 0.12) (type solid))
        (layer "Edge.Cuts")
        (uuid "ea951d95-d8c4-4848-8e65-615367938d49")
      )
      (fp_arc
        (start -4.0132 0.063)
        (mid -4.095391 0.666609)
        (end -4.699 0.7488)
        (stroke (width 0.12) (type solid))
        (layer "Edge.Cuts")
        (uuid "fec4c5c3-8ad9-420b-87cb-dcf95abbbea0")
      )
      (fp_arc
        (start -2.413 0.063)
        (mid -2.143592 0.174592)
        (end -2.032 0.444)
        (stroke (width 0.12) (type solid))
        (layer "Edge.Cuts")
        (uuid "a17bc6bd-8d78-44c5-b1d5-fbb34f0afe03")
      )
      (pad "0" smd oval
        (at -7.62 7.62 270)
        (size 2.75 1.8)
        (drill
          (offset -0.475 0)
        )
        (layers "B.Cu" "B.Mask" "B.Paste")
        (uuid "d8f5d788-c849-4d09-98fd-afea8449aac6")
        ${p.P0}
      )
      (pad "2" smd oval
        (at -7.62 5.08 270)
        (size 2.75 1.8)
        (drill
          (offset -0.475 0)
        )
        (layers "B.Cu" "B.Mask" "B.Paste")
        (pinfunction "A4/0.03_H")
        (pintype "bidirectional")
        (uuid "81ebfeb6-e6fd-4448-a3f5-27b7bda746fd")
      )
      (pad "3" smd oval
        (at -7.62 2.54 270)
        (size 2.75 1.8)
        (drill
          (offset -0.475 0)
        )
        (layers "B.Cu" "B.Mask" "B.Paste")
        (pinfunction "A10/0.28")
        (pintype "bidirectional")
        (uuid "ea86c071-600e-426c-96de-80b8ae9562d7")
      )
      (pad "4" smd oval
        (at -7.62 0 270)
        (size 2.75 1.8)
        (drill
          (offset -0.475 0)
        )
        (layers "B.Cu" "B.Mask" "B.Paste")
        (pinfunction "A11/0.29")
        (pintype "bidirectional")
        (uuid "421d148a-44b3-4578-b7e9-befd17804066")
      )
      (pad "5" smd oval
        (at -7.62 -2.54 270)
        (size 2.75 1.8)
        (drill
          (offset -0.475 0)
        )
        (layers "B.Cu" "B.Mask" "B.Paste")
        (pinfunction "A8_SDA/0.04_H")
        (pintype "bidirectional")
        (uuid "241e14e1-de19-448b-ba5d-c4b09532f82b")
      )
      (pad "6" smd oval
        (at -7.62 -5.08 270)
        (size 2.75 1.8)
        (drill
          (offset -0.475 0)
        )
        (layers "B.Cu" "B.Mask" "B.Paste")
        (pinfunction "A9_SCL/0.05_H")
        (pintype "bidirectional")
        (uuid "92d101a5-31f0-4feb-9848-57dc41ce0935")
      )
      (pad "7" smd oval
        (at -7.62 -7.62 270)
        (size 2.75 1.8)
        (drill
          (offset -0.475 0)
        )
        (layers "B.Cu" "B.Mask" "B.Paste")
        (pinfunction "B8_TX/1.11")
        (pintype "bidirectional")
        (uuid "80316a3f-7732-4885-baf1-d0052f1cad85")
      )
      (pad "8" smd oval
        (at 7.62 -7.62 90)
        (size 2.75 1.8)
        (drill
          (offset -0.475 0)
        )
        (layers "B.Cu" "B.Mask" "B.Paste")
        (pinfunction "B9_RX/1.12")
        (pintype "bidirectional")
        (uuid "e8b2995b-f05e-4cbe-b9cf-5d6057acd4a6")
      )
      (pad "9" smd oval
        (at 7.62 -5.08 90)
        (size 2.75 1.8)
        (drill
          (offset -0.475 0)
        )
        (layers "B.Cu" "B.Mask" "B.Paste")
        (pinfunction "A7_SCK/1.13")
        (pintype "bidirectional")
        (uuid "a384e6c9-708b-4446-802a-6f5dc26d0200")
      )
      (pad "10" smd oval
        (at 7.62 -2.54 90)
        (size 2.75 1.8)
        (drill
          (offset -0.475 0)
        )
        (layers "B.Cu" "B.Mask" "B.Paste")
        (pinfunction "A5_MISO/1.14")
        (pintype "bidirectional")
        (uuid "b1d8eca6-451d-4c68-a5f6-283681e6875a")
      )
      (pad "11" smd oval
        (at 7.62 0 90)
        (size 2.75 1.8)
        (drill
          (offset -0.475 0)
        )
        (layers "B.Cu" "B.Mask" "B.Paste")
        (pinfunction "A6_MOSI/1.15")
        (pintype "bidirectional")
        (uuid "73f85d72-4660-43e1-b675-3ce53a9fe15a")
      )
      (pad "12" smd oval
        (at 7.62 2.54 90)
        (size 2.75 1.8)
        (drill
          (offset -0.475 0)
        )
        (layers "B.Cu" "B.Mask" "B.Paste")
        (pinfunction "3V3")
        (pintype "power_out")
        (uuid "436344f6-0bf9-4326-8b0a-4fca5fd41363")
      )
      (pad "13" smd oval
        (at 7.62 5.08 90)
        (size 2.75 1.8)
        (drill
          (offset -0.475 0)
        )
        (layers "B.Cu" "B.Mask" "B.Paste")
        (pinfunction "GND")
        (pintype "power_out")
        (uuid "253833ab-0021-431e-a99f-882253bd3340")
      )
      (pad "14" smd oval
        (at 7.62 7.62 90)
        (size 2.75 1.8)
        (drill
          (offset -0.475 0)
        )
        (layers "B.Cu" "B.Mask" "B.Paste")
        (pinfunction "5V")
        (pintype "power_out+no_connect")
        (uuid "04c3eba6-6ef1-45d8-a0cc-9f889bbd1585")
      )
      (pad "15" thru_hole circle
        (at -1.27 8.572 180)
        (size 1.397 1.397)
        (drill 1.016)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (pinfunction "A31_SWDIO")
        (pintype "input+no_connect")
        (uuid "2c235fd3-338f-4025-8c9a-87f43010c851")
      )
      (pad "16" thru_hole circle
        (at 1.27 8.572 180)
        (size 1.397 1.397)
        (drill 1.016)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (pinfunction "A30_SWCLK")
        (pintype "input+no_connect")
        (uuid "c82dfa0c-5562-4028-b52a-39189e842fbe")
      )
      (pad "17" thru_hole circle
        (at -1.27 6.032 180)
        (size 1.397 1.397)
        (drill 1.016)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (pinfunction "RESET")
        (pintype "input")
        (uuid "739cf680-d024-4f09-91df-69440a3b1d73")
      )
      (pad "18" thru_hole circle
        (at 1.27 6.032 180)
        (size 1.397 1.397)
        (drill 1.016)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (pinfunction "GND")
        (pintype "power_out")
        (uuid "00c6e3db-acf9-4705-9ba8-2b4d9d5e1a5b")
      )
      (pad "19" thru_hole circle
        (at -4.445 0.317 90)
        (size 1.397 1.397)
        (drill 1.016)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (pinfunction "BAT")
        (pintype "bidirectional")
        (uuid "b6ab3f5e-cc5b-4f6d-a54f-c430f38668e9")
      )
      (pad "20" thru_hole circle
        (at -4.445 2.222 90)
        (size 1.397 1.397)
        (drill 1.016)
        (layers "*.Cu" "*.Mask")
        (remove_unused_layers no)
        (pinfunction "GND")
        (pintype "power_out")
        (uuid "e7b68de2-6021-4eda-b14a-fb3d27b8d65e")
      )
      (embedded_fonts no)
    )
`
  }
}
