<template>
  <div class="py-5 col-sm-10 mx-auto">
    <v-row justify="center">
      <v-col cols="12" sm="6">
        <v-img
          src="https://static.dafiti.com.br/p/FiveBlu-Vestido-FiveBlu-Curto-Floral-Azul/Preto-4139-1697276-2-zoom.jpg"
          aspect-ratio="1.1"
        ></v-img>
      </v-col>
      <v-col sm="5" xs="12">
        <div>
          <h3 class="grey--text lighten-3">
            Vestido Lolyta Curto Floral Azul/Preto
          </h3>
          <div>
            <small>CÓDIGO: 758425</small>
          </div>
        </div>
        <div class="my-5">
          <span class="headline font-weight-bold">R$ 150,00</span>
        </div>
        <div class="my-5">
          <div><small>Descrição</small></div>
          <span
            >Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a
            pellentesque dui, non felis. Maecenas malesuada elit lectus felis,
            malesuada ultricies.
          </span>
        </div>
        <div>
          <div><small>Tamanhos</small></div>
          <div class="d-flex mx-0">
            <div v-for="item in 4" :key="item">
              <v-chip large outlined class="ma-2" color="primary" label>
                M
              </v-chip>
            </div>
          </div>
        </div>
        <div>
          <div><small>Consultar frete</small></div>
          <v-row align-items="center">
            <v-col class="">
              <v-text-field
                outlined
                dense
                v-model="cep"
                hide-details
                single-line
                name="name"
                label="Digite o cep"
              ></v-text-field>
            </v-col>
            <v-col>
              <v-btn @click="searchValueCep" depressed color="primary lighten-1"
                >Calcular</v-btn
              >
            </v-col>
          </v-row>
          <div class="pa-5 grey lighten-3 my-5" v-if="delivery">
            <div class="d-flex justify-space-between">
              <div>
                <small>Receba seu produto em até</small> <br />
                <span
                  v-text="
                    delivery.delivery_time >= 1
                      ? delivery.delivery_time + ' dias'
                      : delivery.delivery_time + ' dia'
                  "
                ></span>
              </div>
              <div>
                <v-chip label outlined color="primary">
                  <span class="mx-2">Frete </span>
                  <span v-text="convertMoney(delivery.price)"></span>
                </v-chip>
              </div>
            </div>
          </div>
        </div>
        <div class="my-5">
          <v-btn
            depressed
            x-large
            block
            class="text-capitalize"
            color="#fcafc0"
          >
            <span class="font-weight-bold white--text">COMPRAR</span>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="6" v-for="item in 6" :key="item" sm="2">
        <Categorie
          title="Feminino"
          image="https://ph-cdn1.ecosweb.com.br/imagens01/foto/moda-feminina/cropped/blusa-cropped-poa-farofa-amarelo_594831_600_1.jpg"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import Mixins from "@/mixins/mixins";
import Categorie from "@/components/categorie/Categorie.vue";
import axios from "axios";
export default {
  components: {
    Categorie,
  },
  mixins: [Mixins],

  data() {
    return {
      cep: "78850-041",
      delivery: null,
    };
  },
  methods: {
    searchValueCep() {
      axios({
        headers: {
          Authorization:
            "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM1N2YxNTExMGY3MjU2M2FjMmVlYTM2ZTRmNzliNDJmNDYzMDM2YjdjNzY5MjI2YWU1ZWVmMDBlMzBjMjU4NjU3MGYzOTVkM2U5YWNkMWIzIn0.eyJhdWQiOiI5NTYiLCJqdGkiOiIzNTdmMTUxMTBmNzI1NjNhYzJlZWEzNmU0Zjc5YjQyZjQ2MzAzNmI3Yzc2OTIyNmFlNWVlZjAwZTMwYzI1ODY1NzBmMzk1ZDNlOWFjZDFiMyIsImlhdCI6MTYxODk2NTE4NiwibmJmIjoxNjE4OTY1MTg2LCJleHAiOjE2NTA1MDExODYsInN1YiI6ImJmMWVjMjNmLTBhNTQtNDcxNC04Yjc4LTU0ZjQ5YWFkNDY1MyIsInNjb3BlcyI6WyJjYXJ0LXJlYWQiLCJjYXJ0LXdyaXRlIiwiY29tcGFuaWVzLXJlYWQiLCJjb21wYW5pZXMtd3JpdGUiLCJjb3Vwb25zLXJlYWQiLCJjb3Vwb25zLXdyaXRlIiwibm90aWZpY2F0aW9ucy1yZWFkIiwib3JkZXJzLXJlYWQiLCJwcm9kdWN0cy1yZWFkIiwicHJvZHVjdHMtZGVzdHJveSIsInByb2R1Y3RzLXdyaXRlIiwicHVyY2hhc2VzLXJlYWQiLCJzaGlwcGluZy1jYWxjdWxhdGUiLCJzaGlwcGluZy1jYW5jZWwiLCJzaGlwcGluZy1jaGVja291dCIsInNoaXBwaW5nLWNvbXBhbmllcyIsInNoaXBwaW5nLWdlbmVyYXRlIiwic2hpcHBpbmctcHJldmlldyIsInNoaXBwaW5nLXByaW50Iiwic2hpcHBpbmctc2hhcmUiLCJzaGlwcGluZy10cmFja2luZyIsImVjb21tZXJjZS1zaGlwcGluZyIsInRyYW5zYWN0aW9ucy1yZWFkIiwidXNlcnMtcmVhZCIsInVzZXJzLXdyaXRlIiwid2ViaG9va3MtcmVhZCIsIndlYmhvb2tzLXdyaXRlIl19.s1amYKyORkTP0x_UQ1I9EM--24her-zafnq9hWB2-SKJFxtRRCJo1Vaj3Bb9-jYpN7kc-NV6m3dFT5N1zHvc6mobrNjl1VFCTS-H4fRc6pvSKPH1OgR4T_qIp3l2WtT7hvIs8HZLD5xgbihDcFZdSPoWinmiAluxiJBy16-YzEzMOBb6BNDvu_16uHJ7yh_0V0RH-EKUOKge8gGBSgLn1YhTBJaPOjOAM5fsnJxM_aaEOzGMFwPckZStqVQlR6DuktMNu2-2i4A-3cOnBzg_NmQRgOOYfIq-4nnYJ_767addGGGt39BycUhO0oHrUVHN2eboRRg9IljbHlzwC2dRSEtErlKZ6I2g7XiaCfgnEW3hCaWZLJTNseMtSGvLh9rGsy75jdyxFL54nhMKCLsKabTHa0wjT_s5a395XtopxsDb6sBhqU9PGpVvwS9YIRB9aUgMPalUAY0L3_qiTXy3_H00fre6MNu34VEe_x4C01rJMCa39UqWLHlYanZzwZxHcdwjdVq52bvap0E9XFSWtD5w6tQhf6ncVmVbvYz6BM33XJBRuztZKvsGIcQgbPD7FV3U4G5qywuTV5nasqLEchiOV2k_vzisousW51ayDHIOiSk3So5nPhTWHfEoa7_ACOZ78uy_6qJA-P6rhjMbjVkGlA-ym8Vy3yg7Bzl-sOI",
        },
        url: "https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate",
        method: "POST",
        data: {
          from: {
            postal_code: "78556136",
          },
          to: {
            postal_code: this.cep,
          },
          products: [
            {
              id: "x",
              width: 11,
              height: 17,
              length: 11,
              weight: 0.3,
              insurance_value: 10.1,
              quantity: 1,
            },
          ],
          options: {
            receipt: false,
            own_hand: false,
          },
          services: "1,2,18",
        },
      }).then((resp) => {
        let minimalCostDelivery = { price: -1 };
        resp.data.forEach((item) => {
          if (
            minimalCostDelivery.price === -1 ||
            Number(item.price) < Number(minimalCostDelivery.price)
          ) {
            minimalCostDelivery = item;
          }
        });
        this.delivery = minimalCostDelivery;
        console.log(this.delivery);
      });
    },
  },
};
</script>

<style></style>
