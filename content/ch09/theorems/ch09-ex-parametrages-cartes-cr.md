---
id: ch09-ex-parametrages-cartes-cr
type: proposition
chapter: 9
title: Les paramétrages locaux et les cartes sont de classe $C^r$
ref: Exemple IX.7.6
page: 160
importance: 2
depends: [ch09-application-cr-entre-sous-varietes-def, ch09-changement-parametrage, ch09-remarques-applications-cr, ch06-inversion-globale, ch09-ex-ouvert-sous-variete, ch09-ex-ouvert-de-sous-variete]
tags: [sous-variete, parametrage-local, carte, application-cr, changement-de-parametrage]
---
## Intuition

> 💡 Un paramétrage local $x:U\to S$ « pose » l'ouvert plat $U\subset\R^m$ sur la sous-variété ; la carte $x^{-1}$ fait le trajet inverse. Avec la notion d'application $C^r$ entre sous-variétés ([[ch09-application-cr-entre-sous-varietes-def]]), ces deux applications sont $C^r$, et pour une raison presque tautologique : **lue dans la carte $x$ elle-même**, chacune devient l'identité de $U$.

Pour que l'énoncé ait un sens, on voit l'ouvert $U$ de $\R^m$ comme une sous-variété de dimension $m$ de $\R^m$ (paramétrée par l'inclusion, [[ch09-ex-ouvert-sous-variete]]), et l'image $x(U)$, ouvert de $S$, comme une sous-variété de $\R^N$ ([[ch09-ex-ouvert-de-sous-variete]]). C'est l'ingrédient qui permettra de dire qu'une courbe $C^1$ tracée sur $S$ se lit en une courbe $C^1$ dans $U$ (preuve de [[ch09-espace-tangent-image-dx]]).

## Énoncé

**Proposition (poly, Exemple IX.7.6, p. 160).** Les paramétrages locaux d'une sous-variété de classe $C^r$ sont des applications de classe $C^r$, et il en va de même des cartes : si $x:U\to S$ est un paramétrage local, la carte $x^{-1}$ est de classe $C^r$, puisque $x^{-1}\circ x=\mathrm{Id}_U$ l'est.

Précisément : soit $S$ une sous-variété de dimension $m$ et de classe $C^r$ ($r\ge1$) de $\R^N$ et $x:U\to S$ un paramétrage local. Alors

1. $x:U\to S$ est de classe $C^r$ au sens de la Définition IX.7.5 (de la sous-variété $U$ de $\R^m$ dans la sous-variété $S$) ;
2. la carte $x^{-1}:x(U)\to U$ est de classe $C^r$ au sens de la Définition IX.7.5 (de la sous-variété $x(U)$ de $\R^N$ dans la sous-variété $U$ de $\R^m$).

## Hypothèses

### H1 — $x$ est un paramétrage local (immersion, homéomorphisme sur un ouvert de $S$)

**Rôle.** Elle permet d'appliquer [[ch09-changement-parametrage]] avec $x$ comme l'un des deux paramétrages.

**Si on la retire.** Sur $S=\R$, $x(t)=t^3$ est un homéomorphisme $C^\infty$ de $\R$ sur $S$ et c'est même une application $C^\infty$ de $U=\R$ dans $S$ au sens de la Définition IX.7.5 (lue dans les paramétrages $\mathrm{id}$, c'est $t\mapsto t^3$, et tout paramétrage de $\R$ est un $C^\infty$-difféomorphisme entre ouverts) ; mais son inverse $s\mapsto s^{1/3}$, lu avec $\mathrm{id}$ au départ et à l'arrivée, n'est pas dérivable en $0$. L'énoncé sur la « carte » tombe : $t\mapsto t^3$ n'est pas un paramétrage ($x'(0)=0$).

### H2 — $S$ de classe $C^r$

**Rôle.** Les paramétrages de $S$ sont $C^r$ et les changements de paramétrage des $C^r$-difféomorphismes ; c'est aussi l'hypothèse de la Définition IX.7.5.

**Si on la retire.** Hypothèse de cohérence : si $S$ n'est que $C^1$, parler de « $x$ de classe $C^2$ vers $S$ » n'a pas de sens intrinsèque (voir [[ch09-application-cr-entre-sous-varietes-def]], H2).

## Idée de la preuve

Lue dans le couple de paramétrages $(\mathrm{Id}_U,x)$, l'application $x$ devient $x^{-1}\circ x\circ\mathrm{Id}_U=\mathrm{Id}_U$ ; lue dans $(x,\mathrm{Id}_U)$, la carte devient $\mathrm{Id}_U^{-1}\circ x^{-1}\circ x=\mathrm{Id}_U$. Pour un couple quelconque, on obtient des composées de changements de paramétrage, qui sont $C^r$.

## Preuve

**L'argument du poly.** Lue dans le paramétrage $x$ de $x(U)$ (au départ) et le paramétrage $\mathrm{Id}_U$ de $U$ (à l'arrivée), la carte $x^{-1}$ devient $\mathrm{Id}_U^{-1}\circ x^{-1}\circ x=\mathrm{Id}_U$, qui est $C^\infty$. Comme un couple de paramétrages en chaque point suffit ([[ch09-remarques-applications-cr]], point 1, conséquence de [[ch09-changement-parametrage]]), $x^{-1}$ est $C^r$. De même $x$, lu dans $(\mathrm{Id}_U,x)$, devient $\mathrm{Id}_U$. Détaillons la vérification pour des paramétrages quelconques.

**Préliminaire : les paramétrages de l'ouvert $U\subset\R^m$.** Soit $z:U''\to U$ un paramétrage de la sous-variété $U$ (de dimension $m$ dans $\R^m$) : $z$ est $C^r$, injective, et $dz_w:\R^m\to\R^m$ est injective, donc inversible pour tout $w$. Par le théorème d'inversion globale ([[ch06-inversion-globale]]), $z(U'')$ est un ouvert de $\R^m$ et $z$ est un $C^r$-difféomorphisme de $U''$ sur $z(U'')$ : $z^{-1}$ est $C^r$ sur cet ouvert.

**Point 1 : $x$ est $C^r$.** $x$ est continue. Soient $y_1:U_1'\to U$ un paramétrage de $U$ et $y_2:U_2'\to S$ un paramétrage de $S$. Posons $W=x(U)\cap y_2(U_2')$ ; le domaine de lecture est
$$
D=y_1^{-1}\big(x^{-1}(y_2(U_2'))\cap y_1(U_1')\big)=y_1^{-1}\big(x^{-1}(W)\big),
$$
et sur $D$,
$$
y_2^{-1}\circ x\circ y_1=\theta\circ y_1,\qquad \theta=y_2^{-1}\circ x:\ x^{-1}(W)\to y_2^{-1}(W).
$$
Par [[ch09-changement-parametrage]], $\theta$ est un $C^r$-difféomorphisme ; $y_1$ est $C^r$ ; la composée est $C^r$ sur $D$.

**Point 2 : $x^{-1}$ est $C^r$.** $x^{-1}:x(U)\to U$ est continue ($x$ est un homéomorphisme). Soient $z_1:U_1''\to x(U)$ un paramétrage de la sous-variété $x(U)$ et $z_2:U_2''\to U$ un paramétrage de $U$. Comme $x(U)=V_0\cap S$ avec $V_0$ ouvert, $z_1$ est aussi un paramétrage de $S$ (si $z_1$ est un homéomorphisme sur $V\cap x(U)$, c'est un homéomorphisme sur $(V\cap V_0)\cap S$). Sur le domaine $D'=z_1^{-1}\big(x(z_2(U_2''))\cap z_1(U_1'')\big)$,
$$
z_2^{-1}\circ x^{-1}\circ z_1=z_2^{-1}\circ\theta',\qquad \theta'=x^{-1}\circ z_1 .
$$
$\theta'$ est un changement de paramétrage de $S$ (entre $z_1$ et $x$), donc $C^r$ ([[ch09-changement-parametrage]]) ; il envoie $D'$ dans l'ouvert $z_2(U_2'')$, sur lequel $z_2^{-1}$ est $C^r$ (préliminaire). La composée est $C^r$ sur $D'$. $\square$

## Preuve à trous

Pour la carte $x^{-1}:x(U)\to U$, on prend des paramétrages $z_1$ de $x(U)$ et $z_2$ de $U$. Sur le domaine de lecture,
$$
z_2^{-1}\circ x^{-1}\circ z_1=z_2^{-1}\circ\theta',\qquad\theta'=x^{-1}\circ z_1,
$$
où <trou indice="z_1 est aussi un paramétrage de S">$\theta'$ est un changement de paramétrage de $S$, donc $C^r$ par la Proposition IX.6.1</trou>. Quant à $z_2$, paramétrage d'un ouvert de $\R^m$, c'est <trou indice="différentielle injective entre espaces de même dimension, et z_2 injective">un $C^r$-difféomorphisme sur son image ouverte (inversion globale), donc $z_2^{-1}$ est $C^r$</trou>. La composée est $C^r$.

En particulier, avec $z_1=x$ et $z_2=\mathrm{Id}_U$, on lit <trou>$\mathrm{Id}_U^{-1}\circ x^{-1}\circ x=\mathrm{Id}_U$</trou> : c'est l'argument du poly. Pour $x$ lui-même, avec des paramétrages $y_1$ de $U$ et $y_2$ de $S$, <trou indice="faire apparaître un changement de paramétrage">$y_2^{-1}\circ x\circ y_1=(y_2^{-1}\circ x)\circ y_1$ est la composée d'un changement de paramétrage et de $y_1$, donc $C^r$</trou>. $\square$

## Exemples

* **Projection stéréographique.** $x(u,v)=\dfrac{1}{1+u^2+v^2}\,(2u,\ 2v,\ u^2+v^2-1)$ paramètre $\mathbb S^2\setminus\{N\}$, $N=(0,0,1)$ ; sa carte est $\sigma(X,Y,Z)=\dfrac{(X,Y)}{1-Z}$. (Vérification : $1-Z=\frac{2}{1+u^2+v^2}$, donc $\sigma(x(u,v))=(u,v)$ ; et pour $P\in\mathbb S^2\setminus\{N\}$, $\norm{\sigma(P)}^2=\frac{1+Z}{1-Z}$, d'où $x(\sigma(P))=P$.) D'après la proposition, $\sigma$ est $C^\infty$ de $\mathbb S^2\setminus\{N\}$ dans $\R^2$ ; c'est cohérent avec le fait que $\sigma$ est la restriction de l'application $C^\infty$ $(X,Y,Z)\mapsto(X,Y)/(1-Z)$ sur l'ouvert $\{Z\neq1\}$ de $\R^3$.
* **Fonction angle.** La carte associée à $x(t)=(\cos t,\sin t)$, $t\in]-\pi,\pi[$, est la fonction angle $\mathbb S^1\setminus\{(-1,0)\}\to]-\pi,\pi[$ ; elle est $C^\infty$, bien qu'on ne l'ait définie que sur le cercle.
* **Lecture d'une courbe dans une carte.** Si $\alpha:I\to S$ est une courbe $C^r$ à valeurs dans $x(U)$, alors $\beta=x^{-1}\circ\alpha:I\to U$ est $C^r$ (composée de deux applications $C^r$, [[ch09-remarques-applications-cr]], points 3 et 4). C'est exactement ce qu'utilise la preuve de [[ch09-espace-tangent-image-dx]].

## Pièges

* > ⚠️ Dire « $x^{-1}$ est $C^r$ » n'a de sens qu'au sens des sous-variétés (Définition IX.7.5) : $x^{-1}$ est définie sur $x(U)\subset S$, pas sur un ouvert de $\R^N$. On ne peut pas la dériver directement.
* > ⚠️ Pour une application qui n'est pas un paramétrage (non immersive, comme $t\mapsto t^3$), l'inverse n'est pas différentiable (H1).
* La sous-variété de départ de $x$ est l'ouvert $U$ de $\R^m$, celle de la carte est l'ouvert $x(U)$ de $S$, pas $S$ tout entier.
