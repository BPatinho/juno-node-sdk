"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Payment Status Enum
 *
 * @see https://www.boletobancario.com/boletofacil/integration/integration.html#payment_status
 */
var PaymentStatus;
(function (PaymentStatus) {
    /**
     * Pagamento autorizado (Aguardando confirmação)
     */
    PaymentStatus["AUTHORIZED"] = "AUTHORIZED";
    /**
     * Pagamento rejeitado pela análise de risco.
     */
    PaymentStatus["DECLINED"] = "DECLINED";
    /**
     * Pagamento não realizado
     */
    PaymentStatus["FAILED"] = "FAILED";
    /**
     * Pagamento não autorizado pela instituição responsável pelo cartão de crédito
     */
    PaymentStatus["NOT_AUTHORIZED"] = "NOT_AUTHORIZED";
    /**
     * Pagamento confirmado
     */
    PaymentStatus["CONFIRMED"] = "CONFIRMED";
})(PaymentStatus = exports.PaymentStatus || (exports.PaymentStatus = {}));
//# sourceMappingURL=PaymentStatus.js.map