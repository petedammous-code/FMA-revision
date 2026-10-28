---
id: ch07-translation-temps-autonome
type: theorem
chapter: 7
title: Invariance par translation en temps (champ autonome)
ref: Théorème VII.3.5
page: 135
importance: 3
depends: [ch07-unicite-globale, ch07-courbe-integrale-maximale-def, ch07-flot-global-def, ch07-equation-autonome-def, ch07-autonome-i-egal-r-remarque]
tags: [autonome, translation-temps, courbe-integrale-maximale, flot, orbite]
---
## Intuition

> 💡 Pour un champ **autonome** (la carte des vents est figée, [[ch07-equation-autonome-def]]), l'heure de départ n'a aucune importance : seule compte la durée écoulée. Si la particule partie de $x_0$ à l'instant $0$ passe en $x_1$ à l'instant $t_1$, alors la particule partie de $x_1$ à l'instant $0$ refait **exactement le même trajet**, avec $t_1$ d'avance : elle est en $\alpha(t+t_1)$ à l'instant $t$. Sa durée de vie dans le futur est donc raccourcie de $t_1$ et celle dans le passé allongée de $t_1$ (pour $t_1>0$ ; c'est l'inverse si $t_1<0$) : $J(x_1)=J(x_0)-t_1$.

Le mécanisme est élémentaire : si $\alpha'(u)=X(\alpha(u))$, alors $\beta(t)=\alpha(t+t_1)$ vérifie $\beta'(t)=\alpha'(t+t_1)=X(\alpha(t+t_1))=X(\beta(t))$ — ce calcul **échoue** dès que $X$ dépend du temps, car on obtiendrait $X(t+t_1,\beta(t))$ au lieu de $X(t,\beta(t))$. Le reste de la preuve consiste à vérifier que la courbe translatée est bien **maximale**, grâce à l'unicité ([[ch07-unicite-globale]]) et à la définition de $J(x_0)$ comme réunion de tous les intervalles d'existence ([[ch07-courbe-integrale-maximale-def]]).

Notations ([[ch07-flot-global-def]]) : pour un champ autonome on prend $I=\R$, $\tau_0=0$ ; $\alpha_{x_0}$ est la courbe intégrale maximale de condition initiale $(0,x_0)$, définie sur l'intervalle ouvert $J(x_0)=J_0(x_0)\ni0$ ; pour un intervalle $J$ et $c\in\R$, $J-c=\{t\in\R\ ;\ t+c\in J\}$ est le translaté de $J$ par $-c$.

## Énoncé

**Théorème (poly, Théorème VII.3.5, p. 135).** Soit $U$ un ouvert d'un espace de Banach $E$. Soit $X : U\to E$ un champ de vecteurs qui ne dépend pas du temps et lipschitzien. Soient $x_0\in U$ et $\alpha$ la courbe intégrale maximale de condition initiale $x_0$ (c'est-à-dire $(0,x_0)$), définie sur l'intervalle $J(x_0)$. Soit $t_1\in J(x_0)$. Alors la courbe intégrale
$$
\beta : J(x_0)-t_1\to U,\qquad t\mapsto\beta(t)=\alpha(t+t_1)
$$
est la courbe intégrale maximale de $X$ de condition initiale $x_1=\alpha(t_1)$.

Autrement dit : $J(\alpha(t_1))=J(x_0)-t_1$ et $\alpha_{x_1}(t)=\alpha_{x_0}(t+t_1)$ pour tout $t\in J(x_1)$ ; en termes de flot, $F(t,F(t_1,x_0))=F(t+t_1,x_0)$.

## Hypothèses

### H1 — $X$ ne dépend pas du temps (champ autonome)

**Rôle.** C'est l'hypothèse qui fait de $\beta(t)=\alpha(t+t_1)$ une courbe intégrale : $\beta'(t)=X(\alpha(t+t_1))=X(\beta(t))$. Avec un champ $X(t,x)$, on aurait seulement $\beta'(t)=X(t+t_1,\beta(t))$, ce qui n'est pas l'équation de $X$.

**Si on la retire.** Sur $I=U=\R$, $X(t,x)=2t$. La courbe intégrale maximale de condition initiale $(0,0)$ est $\alpha(t)=t^2$ ($J=\R$). Avec $t_1=1$ : $\beta(t)=\alpha(t+1)=(t+1)^2$ vérifie $\beta'(t)=2t+2\ne2t$, donc $\beta$ **n'est pas** une courbe intégrale de $X$. La courbe intégrale de condition initiale $(0,\alpha(1))=(0,1)$ est $t\mapsto1+t^2\ne\beta$. La bonne formule dans le cas dépendant du temps est celle de [[ch07-composition-flot]] : $F(0,1+t,0)=F(1,1+t,F(0,1,0))$, qui fait intervenir l'instant absolu $1$ comme instant initial.

### H2 — $X$ lipschitzien

**Rôle.** Le poly suppose $X$ lipschitzien ; la preuve n'utilise en réalité que l'unicité des courbes intégrales ([[ch07-unicite-globale]]) et la définition de la courbe maximale, qui ne demandent que « localement lipschitzien » ([[ch07-localement-lipschitzien-def]]). L'énoncé reste donc vrai pour un champ autonome localement lipschitzien (par exemple de classe $C^1$, [[ch07-restriction-domaine-c1-lipschitz]]) : hypothèse de confort.

**Si on la retire.** Sans aucune condition de Lipschitz, l'unicité tombe ([[ch07-peano-non-unicite]]) et « la » courbe intégrale maximale n'existe plus : pour $X(x)=2\abs{x}^{1/2}$ sur $\R$, les fonctions $0$ et $t\mapsto\operatorname{signe}(t)t^2$ sont deux courbes intégrales de condition initiale $(0,0)$ définies sur $\R$. L'énoncé perd son sens (il reste vrai que la translatée d'**une** courbe intégrale est une courbe intégrale).

### H3 — $t_1\in J(x_0)$

**Rôle.** Nécessaire pour que $x_1=\alpha(t_1)$ soit défini, et pour que $0\in J(x_0)-t_1$ : le translaté est bien un intervalle ouvert contenant $0$, domaine légitime d'une courbe intégrale de condition initiale $(0,x_1)$.

**Si on la retire.** Pour $\alpha'=\alpha^2$, $x_0=1$ : $\alpha(t)=1/(1-t)$, $J(1)=\,]-\infty\,;1[$ ; $t_1=1$ n'est pas dans $J(1)$ et $\alpha(1)$ n'existe pas. Rien à translater.

## Idée de la preuve

(1) $\beta$ est une courbe intégrale (autonomie) de condition initiale $(0,x_1)$ sur $J(x_0)-t_1$, donc $J(x_0)-t_1\subset J(x_1)$ et $\beta=\alpha_{x_1}$ sur cet intervalle. (2) Réciproquement, $t\mapsto\alpha_{x_1}(t-t_1)$ est une courbe intégrale passant par $(t_1,x_1)$ comme $\alpha$ ; par unicité on la recolle à $\alpha$, et la maximalité de $J(x_0)$ donne $J(x_1)+t_1\subset J(x_0)$.

## Preuve

*Le poly énonce ce théorème sans démonstration ; voici une preuve complète.* Notons $\alpha=\alpha_{x_0}$, $J=J(x_0)$ (intervalle ouvert contenant $0$ et $t_1$), $x_1=\alpha(t_1)$, et $\alpha_{x_1} : J(x_1)\to U$ la courbe intégrale maximale de condition initiale $(0,x_1)$ ([[ch07-courbe-integrale-maximale-def]]). Dans tout ce qui suit, le champ autonome $X$ est vu comme le champ $\tilde X(t,x)=X(x)$ sur $\R\times U$ ([[ch07-equation-autonome-def]]), avec $I=\R$ ([[ch07-autonome-i-egal-r-remarque]]).

**Étape 1 : $J-t_1\subset J(x_1)$ et $\beta=\alpha_{x_1}$ sur $J-t_1$.** L'ensemble $J-t_1=\{t\ ;\ t+t_1\in J\}$ est un intervalle ouvert, et il contient $0$ car $t_1\in J$. L'application $\beta : J-t_1\to U$, $\beta(t)=\alpha(t+t_1)$, est de classe $C^1$ (composée de $\alpha$ et d'une translation) et, pour tout $t\in J-t_1$,
$$
\beta'(t)=\alpha'(t+t_1)=X\big(\alpha(t+t_1)\big)=X\big(\beta(t)\big),
$$
où l'on a utilisé que $X$ ne dépend pas du temps. De plus $\beta(0)=\alpha(t_1)=x_1$. Donc $\beta$ est une courbe intégrale de $X$ de condition initiale $(0,x_1)$, définie sur l'intervalle ouvert $J-t_1\ni0$. Par définition de $J(x_1)$ comme réunion de tous les intervalles ouverts contenant $0$ sur lesquels existe une courbe intégrale de condition initiale $(0,x_1)$, on a $J-t_1\subset J(x_1)$. Par unicité globale ([[ch07-unicite-globale]], appliquée aux deux courbes intégrales $\beta$ et $\alpha_{x_1}$ de même condition initiale $(0,x_1)$), $\beta=\alpha_{x_1}$ sur $(J-t_1)\cap J(x_1)=J-t_1$.

**Étape 2 : $J(x_1)+t_1\subset J$.** Posons $\gamma : J(x_1)+t_1\to U$, $\gamma(t)=\alpha_{x_1}(t-t_1)$. Comme à l'étape 1, $J(x_1)+t_1$ est un intervalle ouvert contenant $t_1$, $\gamma$ est de classe $C^1$ et $\gamma'(t)=\alpha_{x_1}'(t-t_1)=X(\alpha_{x_1}(t-t_1))=X(\gamma(t))$ (autonomie), avec $\gamma(t_1)=\alpha_{x_1}(0)=x_1=\alpha(t_1)$. Ainsi $\alpha$ (sur $J$) et $\gamma$ (sur $J(x_1)+t_1$) sont deux courbes intégrales de $X$ de même condition initiale $(t_1,x_1)$, définies sur des intervalles ouverts contenant $t_1$ : d'après [[ch07-unicite-globale]] (avec $\tau_0=t_1$), elles coïncident sur $J\cap(J(x_1)+t_1)$, intervalle ouvert non vide (il contient $t_1$).

Définissons alors $\tilde\alpha$ sur $\tilde J=J\cup(J(x_1)+t_1)$ par $\tilde\alpha=\alpha$ sur $J$ et $\tilde\alpha=\gamma$ sur $J(x_1)+t_1$ : c'est licite car $\alpha$ et $\gamma$ coïncident sur l'intersection. La réunion de deux intervalles ouverts d'intersection non vide est un intervalle ouvert ; $\tilde J$ contient $0$ ; $\tilde\alpha$ est de classe $C^1$ et vérifie $\tilde\alpha'=X(\tilde\alpha)$ sur $\tilde J$, puisque c'est vrai sur chacun des deux ouverts $J$ et $J(x_1)+t_1$ qui recouvrent $\tilde J$ ; enfin $\tilde\alpha(0)=\alpha(0)=x_0$. Donc $\tilde\alpha$ est une courbe intégrale de condition initiale $(0,x_0)$ définie sur $\tilde J$, et par définition de $J=J(x_0)$ comme réunion, $\tilde J\subset J$. En particulier $J(x_1)+t_1\subset J$, soit $J(x_1)\subset J-t_1$.

**Conclusion.** Les étapes 1 et 2 donnent $J(x_1)=J-t_1=J(x_0)-t_1$, et $\alpha_{x_1}=\beta$ sur cet intervalle : $\beta$ est la courbe intégrale maximale de condition initiale $x_1$. $\square$

*Remarque.* En termes de flot ([[ch07-flot-global-def]]), le théorème s'écrit : si $(t_1,x_0)\in D_0$, alors $(t,F(t_1,x_0))\in D_0\iff(t+t_1,x_0)\in D_0$, et dans ce cas $F(t,F(t_1,x_0))=F(t+t_1,x_0)$. C'est la propriété de groupe ([[ch07-groupe-un-parametre]]).

## Preuve à trous

Notons $\alpha=\alpha_{x_0}$, $J=J(x_0)$, $x_1=\alpha(t_1)$.

**Étape 1.** $J-t_1$ est un intervalle ouvert contenant $0$. La fonction $\beta(t)=\alpha(t+t_1)$ est $C^1$ et <trou indice="où intervient l'autonomie ?">$\beta'(t)=\alpha'(t+t_1)=X(\alpha(t+t_1))=X(\beta(t))$ car $X$ ne dépend pas du temps</trou>, avec $\beta(0)=x_1$. Donc $\beta$ est une courbe intégrale de condition initiale $(0,x_1)$ et, par <trou indice="comment est défini $J(x_1)$ ?">définition de $J(x_1)$ comme réunion des intervalles d'existence, $J-t_1\subset J(x_1)$</trou> ; par unicité globale, $\beta=\alpha_{x_1}$ sur $J-t_1$.

**Étape 2.** Posons $\gamma(t)=\alpha_{x_1}(t-t_1)$ sur $J(x_1)+t_1$ : courbe intégrale avec $\gamma(t_1)=x_1=\alpha(t_1)$. Par <trou indice="deux courbes intégrales, même condition initiale $(t_1,x_1)$">unicité globale (Proposition VII.3.1 avec $\tau_0=t_1$), $\gamma=\alpha$ sur $J\cap(J(x_1)+t_1)$</trou>. On recolle $\alpha$ et $\gamma$ en une courbe intégrale $\tilde\alpha$ de condition initiale $(0,x_0)$ sur l'intervalle ouvert $J\cup(J(x_1)+t_1)$, d'où <trou indice="maximalité de $J$">$J\cup(J(x_1)+t_1)\subset J$ par définition de $J=J(x_0)$, donc $J(x_1)\subset J-t_1$</trou>.

**Conclusion.** $J(x_1)=J(x_0)-t_1$ et $\alpha_{x_1}=\beta$. $\square$

## Exemples

**Exemple 1 ($\alpha'=\alpha^2$).** Sur $U=\R$, $X(x)=x^2$. Pour $x_0=1$ : $\alpha(t)=\dfrac{1}{1-t}$, $J(1)=\,]-\infty\,;1[$. Prenons $t_1=\tfrac12\in J(1)$ : $x_1=\alpha(\tfrac12)=2$ et
$$
\beta(t)=\alpha\big(t+\tfrac12\big)=\frac{1}{\tfrac12-t}=\frac{2}{1-2t},\qquad t\in J(1)-\tfrac12=\,]-\infty\,;\tfrac12[.
$$
Or la courbe intégrale maximale de condition initiale $x_1=2$ est $\alpha_2(t)=\dfrac{2}{1-2t}$ sur $J(2)=\,]-\infty\,;\tfrac12[$ (formule $x/(1-tx)$ de [[ch07-flot-global-def]]) : on retrouve $\alpha_2=\beta$ et $J(2)=J(1)-\tfrac12$. La durée de vie future de $2$ est $\tfrac12$, celle de $1$ est $1$ : la particule partie de $1$ met $\tfrac12$ à atteindre $2$, puis explose $\tfrac12$ plus tard.

**Exemple 2 (rotation).** Sur $U=\R^2$, $X(x,y)=(-y,x)$, c'est-à-dire $X(z)=iz$ en identifiant $\R^2\simeq\C$. La courbe intégrale maximale de condition initiale $z_0$ est $\alpha_{z_0}(t)=e^{it}z_0$, $J(z_0)=\R$. Alors $\alpha_{z_0}(t+t_1)=e^{it}\,(e^{it_1}z_0)=\alpha_{z_1}(t)$ avec $z_1=e^{it_1}z_0$ : translater le temps revient à tourner le point de départ.

**Exemple 3 (conséquence : les orbites partitionnent $U$).** L'**orbite** de $x_0$ est l'image $\mathcal O(x_0)=\alpha_{x_0}(J(x_0))\subset U$. Si $x_1\in\mathcal O(x_0)$, disons $x_1=\alpha_{x_0}(t_1)$, le théorème donne $\mathcal O(x_1)=\alpha_{x_0}(J(x_0)-t_1+t_1)=\mathcal O(x_0)$. Donc deux orbites sont égales ou disjointes : la relation « être sur la même orbite » est une relation d'équivalence sur $U$, et les orbites forment une partition de $U$ (le « portrait de phase »). Pour l'exemple 2, les orbites sont les cercles centrés en $0$ et le point $\{0\}$.

## Pièges

* > ⚠️ Le théorème est **faux** pour un champ dépendant du temps (H1) : $\alpha'=2t$, $\alpha(0)=0$ donne $\alpha=t^2$ et $t\mapsto(t+1)^2$ n'est pas solution. Utiliser alors [[ch07-composition-flot]].
* Sens de la translation : $J(x_1)=J(x_0)-t_1$ (et non $+t_1$). Si $J(x_0)=\,]a\,;b[$, alors $J(\alpha(t_1))=\,]a-t_1\,;b-t_1[$ : pour $t_1>0$, la borne supérieure **diminue** de $t_1$ (temps déjà consommé) et la borne inférieure aussi.
* Ne pas confondre la courbe intégrale (un paramétrage $t\mapsto\alpha(t)$) et l'orbite (son image) : le théorème dit que changer de point de départ **sur une même orbite** ne change que le paramétrage, par translation.
* « Lipschitzien » dans l'énoncé peut être remplacé par « localement lipschitzien » (H2) ; mais une condition de Lipschitz **au moins locale** est indispensable pour parler de la courbe maximale.
* En notation non autonome, l'énoncé donne $J_{\tau_0}(x_0)=J(x_0)+\tau_0$ et $\alpha_{\tau_0,x_0}(t)=\alpha_{x_0}(t-\tau_0)$ (même argument de translation : $t\mapsto\alpha_{x_0}(t-\tau_0)$ est une courbe intégrale valant $x_0$ en $\tau_0$, et $t\mapsto\alpha_{\tau_0,x_0}(t+\tau_0)$ une courbe intégrale valant $x_0$ en $0$ ; on conclut par unicité et maximalité comme dans la preuve) : c'est ce qui autorise la convention $\tau_0=0$ de [[ch07-flot-global-def]].
