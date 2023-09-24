import requests
import matplotlib.pyplot as plt
from datetime import datetime
import json

url = "http://46.17.108.113:8666/STH/v1/contextEntities/type/Lamp/id/urn:ngsi-ld:Lamp:001/attributes/luminosity?hOffset=1&lastN=90"

headers = {
  'fiware-service': 'smart',
  'fiware-servicepath': '/'
}

response = requests.get(url, headers=headers)

if response.status_code == 200:
    data = json.loads(response.text)
    context_responses = data.get('contextResponses', [])

    if context_responses:
        luminosity_data = context_responses[0].get('contextElement', {}).get('attributes', [])[0].get('values', [])
        timestamps = [entry['recvTime'] for entry in luminosity_data]
        luminosity_values = [entry['attrValue'] for entry in luminosity_data]

        # Converte timestamps em objetos datetime
        timestamps = [datetime.strptime(ts, "%Y-%m-%dT%H:%M:%S.%fZ") for ts in timestamps]

        # Cria o gráfico
        plt.figure(figsize=(12, 6))
        plt.plot(timestamps, luminosity_values, marker='o', linestyle='-')
        plt.xlabel('Tempo')
        plt.ylabel('Luminosidade')
        plt.title('Gráfico de Luminosidade em Função do Tempo')
        plt.grid(True)

        # Mostra o gráfico
        plt.show()
    else:
        print("Não foram encontrados dados de luminosidade na resposta.")
else:
    print(f"Erro na solicitação HTTP: {response.status_code}")