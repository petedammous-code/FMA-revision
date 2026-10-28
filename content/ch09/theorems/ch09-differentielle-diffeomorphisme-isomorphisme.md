---
id: ch09-differentielle-diffeomorphisme-isomorphisme
type: proposition
chapter: 9
title: La différentielle d'un difféomorphisme est un isomorphisme ; invariance de la dimension
ref: Proposition IX.7.25
page: 165
importance: 2
depends: [ch09-composition-differentielles, ch09-diffeomorphisme-sous-varietes-def, ch09-espace-tangent-image-dx, ch09-differentielle-entre-sous-varietes-def, ch09-changement-parametrage]
tags: [sous-variete, diffeomorphisme, differentielle, isomorphisme, dimension]
---
## Intuition

> 💡 Un difféomorphisme $\varphi$ se défait par $\varphi^{-1}$ ; en « zoomant » en un point, $\varphi$ ressemble à sa différentielle $d\varphi_p$ et $\varphi^{-1}$ à $d(\varphi^{-1})_{\varphi(p)}$. Comme $\varphi^{-1}\circ\varphi=\mathrm{Id}$, les deux zooms se défont aussi : $d\varphi_p$ est inversible. Un isomorphisme linéaire conservant la dimension, **deux sous-variétés difféomorphes ont la même dimension**.

Rappels : $T_pS$ est l'espace tangent en $p$, sous-espace vectoriel de dimension $m=\dim S$ ([[ch09-espace-tangent-image-dx]]) ; $d\varphi_p:T_pS_1\to T_{\varphi(p)}S_2$ est la différentielle de $\varphi$ en $p$ ([[ch09-differentielle-entre-sous-varietes-def]]) ; un difféomorphisme est une bijection $C^k$ ($k\ge 1$) d'inverse $C^k$ ([[ch09-diffeomorphisme-sous-varietes-def]]).

## Énoncé

**Proposition (poly, Proposition IX.7.25, p. 165).** Soient $S_1$ et $S_2$ deux sous-variétés (respectivement de $\R^{N_1}$ et $\R^{N_2}$) et soit
$$
\varphi:S_1\longrightarrow S_2
$$
un difféomorphisme. Alors pour tout $p\in S_1$,
$$
d\varphi_p:T_pS_1\longrightarrow T_{\varphi(p)}S_2
$$
est un isomorphisme, d'inverse
$$
d(\varphi^{-1})_{\varphi(p)}:T_{\varphi(p)}S_2\longrightarrow T_pS_1 .
$$
En particulier, les dimensions de $S_1$ et $S_2$ sont les mêmes.

## Hypothèses

### H1 — $\varphi$ difféomorphisme (de classe au moins $C^1$)

**Rôle.** Il faut que $\varphi$ soit différentiable en $p$ et $\varphi^{-1}$ différentiable en $\varphi(p)$ pour écrire la règle de composition sur $\varphi^{-1}\circ\varphi=\mathrm{Id}_{S_1}$ et $\varphi\circ\varphi^{-1}=\mathrm{Id}_{S_2}$. (La preuve n'utilise que cela, en ce point.)

**Si on la retire.** Si $\varphi$ est seulement un homéomorphisme de classe $C^\infty$ dont l'inverse n'est pas différentiable, la conclusion tombe : $\varphi:\R\to\R$, $t\mapsto t^3$, a pour différentielle en $0$ l'application nulle $h\mapsto 3\cdot0^2\,h=0$, qui n'est pas un isomorphisme de $\R$. Pour l'invariance de la dimension, un simple homéomorphisme suffit en fait (théorème d'invariance du domaine de Brouwer), mais c'est un résultat de topologie bien plus difficile ; et une application continue **surjective** ne suffit pas : il existe des surjections continues de $[0,1]$ sur $[0,1]^2$ (courbes de Peano).

### H2 — Réciproque : fausse globalement

Ce n'est pas une hypothèse mais une mise en garde : $d\varphi_p$ isomorphisme en **tout** point n'entraîne pas que $\varphi$ soit un difféomorphisme. $\varphi:\R\to\mathbb S^1$, $t\mapsto(\cos t,\sin t)$ : $T_t\R=\R$, $d\varphi_t(1)=(-\sin t,\cos t)\ne0$, et $T_{\varphi(t)}\mathbb S^1$ est de dimension $1$, donc $d\varphi_t$ est un isomorphisme pour tout $t$ ; pourtant $\varphi$ n'est pas injective. La réciproque n'est vraie que **localement** : c'est l'inversion locale ([[ch09-inversion-locale-sous-varietes]]).

## Idée de la preuve

Dériver $\varphi^{-1}\circ\varphi=\mathrm{Id}_{S_1}$ et $\varphi\circ\varphi^{-1}=\mathrm{Id}_{S_2}$ par la règle de composition ; la différentielle de l'identité est l'identité. Puis un isomorphisme conserve la dimension, et $\dim T_pS=\dim S$.

## Preuve

Le poly dit : « c'est évident par la formule de composition des différentielles ». Détaillons.

*Différentielle de l'identité.* Pour une sous-variété $S$ (de classe $C^k$, $k\ge1$) et $p\in S$, $\mathrm{Id}_S$ est différentiable en $p$ : lue dans deux paramétrages $x_1$, $x_2$ de $S$, elle devient $x_2^{-1}\circ\mathrm{Id}_S\circ x_1=x_2^{-1}\circ x_1$, le changement de paramétrage, qui est de classe $C^k$ ([[ch09-changement-parametrage]]). De plus $d(\mathrm{Id}_S)_p=\mathrm{Id}_{T_pS}$ : si $v=\alpha'(0)$ avec $\alpha$ courbe $C^1$ tracée sur $S$, $\alpha(0)=p$, alors $\beta=\mathrm{Id}_S\circ\alpha=\alpha$ et, par la caractérisation 2 de [[ch09-differentielle-entre-sous-varietes-def]], $d(\mathrm{Id}_S)_p(v)=\beta'(0)=v$.

*Composition.* Soit $p\in S_1$ et $q=\varphi(p)$. L'application $\varphi$ est différentiable en $p$ et $\varphi^{-1}$ est différentiable en $q$ (elles sont de classe $C^k$, $k\ge1$). La règle de composition ([[ch09-composition-differentielles]]) appliquée à $\varphi^{-1}\circ\varphi=\mathrm{Id}_{S_1}$ en $p$ donne
$$
d(\varphi^{-1})_{q}\circ d\varphi_p=d(\mathrm{Id}_{S_1})_p=\mathrm{Id}_{T_pS_1},
$$
et appliquée à $\varphi\circ\varphi^{-1}=\mathrm{Id}_{S_2}$ en $q$ (avec $\varphi^{-1}(q)=p$) :
$$
d\varphi_p\circ d(\varphi^{-1})_{q}=d(\mathrm{Id}_{S_2})_q=\mathrm{Id}_{T_qS_2}.
$$
Ainsi $d\varphi_p:T_pS_1\to T_qS_2$ est linéaire, inversible à gauche et à droite : c'est un isomorphisme d'inverse $d(\varphi^{-1})_{\varphi(p)}$.

*Dimension.* Notons $m_1=\dim S_1$, $m_2=\dim S_2$. D'après [[ch09-espace-tangent-image-dx]], $T_pS_1$ est un espace vectoriel de dimension $m_1$ et $T_qS_2$ de dimension $m_2$. Un isomorphisme linéaire conserve la dimension, donc $m_1=m_2$ (dès que $S_1\ne\emptyset$, pour disposer d'un point $p$). $\square$

## Preuve à trous

Soit $p\in S_1$, $q=\varphi(p)$. D'abord, <trou indice="utiliser une courbe α et β = Id∘α">$d(\mathrm{Id}_S)_p=\mathrm{Id}_{T_pS}$ pour toute sous-variété $S$, car $\mathrm{Id}_S\circ\alpha=\alpha$</trou>.

La règle de composition appliquée à <trou indice="deux identités à dériver">$\varphi^{-1}\circ\varphi=\mathrm{Id}_{S_1}$ en $p$ et $\varphi\circ\varphi^{-1}=\mathrm{Id}_{S_2}$ en $q$</trou> donne
$$
d(\varphi^{-1})_{q}\circ d\varphi_p=\mathrm{Id}_{T_pS_1},\qquad d\varphi_p\circ d(\varphi^{-1})_{q}=\mathrm{Id}_{T_qS_2},
$$
donc $d\varphi_p$ est un isomorphisme d'inverse $d(\varphi^{-1})_q$.

Enfin <trou indice="dimension des espaces tangents">$\dim T_pS_1=\dim S_1$ et $\dim T_qS_2=\dim S_2$ (Proposition IX.7.9)</trou>, et un isomorphisme conserve la dimension : $\dim S_1=\dim S_2$. $\square$

## Exemples

* **Antipodie de la sphère.** $a:\mathbb S^2\to\mathbb S^2$, $a(p)=-p$, restriction de $-\mathrm{Id}_{\R^3}$ ; $da_p$ est la restriction de $-\mathrm{Id}$ à $T_p\mathbb S^2=p^\perp$, à valeurs dans $T_{-p}\mathbb S^2=(-p)^\perp=p^\perp$ : c'est $v\mapsto -v$, isomorphisme d'inverse lui-même, et en effet $a^{-1}=a$.
* **Paramétrage local.** Pour $x:U\to x(U)$ paramétrage de $S$ (difféomorphisme, cf. [[ch09-diffeomorphisme-sous-varietes-def]]), $dx_q:\R^m\to T_{x(q)}S$ est un isomorphisme : c'est cohérent avec $dx_q$ injective (définition d'un paramétrage) et $T_{x(q)}S=dx_q(\R^m)$ ([[ch09-espace-tangent-image-dx]]). L'inverse est $d(x^{-1})_{x(q)}$ : la différentielle de la carte.
* **Obstruction de dimension.** Le cylindre $\mathbb S^1\times\R$ (dimension $2$) et le cercle $\mathbb S^1$ (dimension $1$) ne sont pas difféomorphes ; un ouvert de $\R^2$ et un ouvert de $\R^3$ non plus. (Le cylindre et le plan privé de l'origine **sont** difféomorphes : $(\cos\theta,\sin\theta,s)\mapsto e^s(\cos\theta,\sin\theta)$, d'inverse $y\mapsto(y/\norm y,\ln\norm y)$, toutes deux $C^\infty$ comme restrictions d'applications $C^\infty$ sur des ouverts.)

## Pièges

* > ⚠️ La réciproque est fausse globalement ($t\mapsto(\cos t,\sin t)$) : « $d\varphi_p$ iso partout » donne seulement un difféomorphisme **local** ; il faut en plus la bijectivité pour conclure.
* L'invariance porte sur la dimension $m$ des sous-variétés, **pas** sur la dimension $N$ des espaces ambiants.
* $d\varphi_p$ va de $T_pS_1$ dans $T_{\varphi(p)}S_2$ ; l'inverse est évalué **au point image** : $d(\varphi^{-1})_{\varphi(p)}$, pas $d(\varphi^{-1})_p$.
* Si $\varphi$ est une bijection $C^1$ avec $d\varphi_p$ non inversible en un point, $\varphi^{-1}$ n'est **pas** différentiable en $\varphi(p)$ (contraposée) : c'est le test le plus rapide pour montrer qu'une bijection n'est pas un difféomorphisme.
