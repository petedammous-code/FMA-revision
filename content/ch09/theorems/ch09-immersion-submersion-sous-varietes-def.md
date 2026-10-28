---
id: ch09-immersion-submersion-sous-varietes-def
type: definition
chapter: 9
title: Immersion et submersion entre sous-variétés
ref: Définition IX.7.28
page: 167
importance: 2
depends: [ch09-differentielle-entre-sous-varietes-def, ch09-immersion-submersion-def]
tags: [sous-variete, immersion, submersion, differentielle, espace-tangent]
---
## Intuition

> 💡 On classe une application $\varphi:S_1\to S_2$ selon ce que fait sa différentielle en un point : une **immersion** ne « écrase » aucune direction tangente (différentielle injective : localement, $\varphi$ dépose fidèlement un petit morceau de $S_1$ dans $S_2$, comme on dessine une courbe sur une surface) ; une **submersion** « remplit » toutes les directions tangentes de $S_2$ (différentielle surjective : localement, $\varphi$ ressemble à une projection, comme l'altitude sur une sphère hors des pôles).

C'est la généralisation de la Définition IX.1.1 ([[ch09-immersion-submersion-def]]), où $\varphi$ partait d'un ouvert de $\R^p$ vers $\R^q$. Ici $T_pS$ désigne l'**espace tangent** en $p$ ([[ch09-espace-tangent-image-dx]]) et $d\varphi_p:T_pS_1\to T_{\varphi(p)}S_2$ la **différentielle** de $\varphi$ en $p$, définie par $d\varphi_p(\alpha'(0))=(\varphi\circ\alpha)'(0)$ pour toute courbe $\alpha$ tracée sur $S_1$ avec $\alpha(0)=p$ ([[ch09-differentielle-entre-sous-varietes-def]]).

## Énoncé

**Définition (poly, Définition IX.7.28, p. 167).** Soient $S_1$ et $S_2$ deux sous-variétés (respectivement de $\R^{N_1}$ et $\R^{N_2}$) et $\varphi:S_1\to S_2$ une application de classe $C^k$. On dit que $\varphi$ est une **immersion** (resp. une **submersion**) au point $p\in S_1$ si sa différentielle
$$
d\varphi_p:T_pS_1\longrightarrow T_{\varphi(p)}S_2
$$
est injective (resp. surjective). On dit que $\varphi$ est une immersion (resp. une submersion) si c'est une immersion (resp. une submersion) en tout point $p\in S_1$.

## Hypothèses

### H1 — $\varphi$ de classe $C^k$ avec $k\ge1$

Condition cachée : il faut $\varphi$ différentiable pour que $d\varphi_p$ existe, et en pratique $C^1$ pour les résultats qui suivent (fibres de submersions et images d'immersions sont des sous-variétés, [[ch09-fibres-submersion-image-immersion]], qui reposent sur l'inversion locale). Les sous-variétés $S_1,S_2$ sont de classe au moins $C^k$ (cadre de [[ch09-application-cr-entre-sous-varietes-def]]).

### H2 — Contraintes de dimension

Notons $m_1=\dim S_1=\dim T_pS_1$ et $m_2=\dim S_2=\dim T_{\varphi(p)}S_2$. Une immersion en $p$ impose $m_1\le m_2$ ; une submersion en $p$ impose $m_1\ge m_2$. Si $m_1=m_2$, immersion en $p$ $\iff$ submersion en $p$ $\iff$ $d\varphi_p$ isomorphisme, et alors $\varphi$ est un difféomorphisme local en $p$ ([[ch09-inversion-locale-sous-varietes]]).

### H3 — Lecture dans des cartes

Si $x_1$, $x_2$ sont des paramétrages en $p$ et $\varphi(p)$ (avec $\varphi(x_1(U_1))\subset x_2(U_2)$) et $\psi=x_2^{-1}\circ\varphi\circ x_1$, alors $d\psi_{q_1}=d(x_2^{-1})_{\varphi(p)}\circ d\varphi_p\circ d(x_1)_{q_1}$, où les facteurs extrêmes sont des isomorphismes ([[ch09-composition-differentielles]], [[ch09-differentielle-diffeomorphisme-isomorphisme]]). Donc $\varphi$ est une immersion (resp. submersion) en $p$ **si et seulement si** $\psi$ est une immersion (resp. submersion) en $q_1=x_1^{-1}(p)$ au sens de la Définition IX.1.1. En particulier, quand $S_1$, $S_2$ sont des ouverts de $\R^{N_1}$, $\R^{N_2}$, on retrouve exactement la Définition IX.1.1 (car alors $T_pS_1=\R^{N_1}$, [[ch09-remarques-differentielle-cas-euclidien]]).

## Exemples

* **Inclusions.** L'inclusion $i:S\to\R^N$ d'une sous-variété est une immersion : pour une courbe $\alpha$ tracée sur $S$, $i\circ\alpha=\alpha$, donc $di_p(v)=v$ ; $di_p$ est l'inclusion $T_pS\hookrightarrow\R^N$, injective. De même l'inclusion de l'équateur $\mathbb S^1\times\{0\}$ dans $\mathbb S^2$ est une immersion. Ce n'est une submersion que si $\dim S=N$.
* **Paramétrages.** Un paramétrage $x:U\to S$ est, comme application de $U$ dans $S$, à la fois une immersion et une submersion : $dx_q:\R^m\to T_{x(q)}S$ est injective d'image $T_{x(q)}S$ ([[ch09-espace-tangent-image-dx]]).
* **Altitude sur la sphère.** $h:\mathbb S^2\to\R$, $h(x,y,z)=z$, a pour différentielle $dh_p(v)=v_3$ sur $T_p\mathbb S^2=p^\perp$ ([[ch09-ex-fonction-hauteur]]). Une forme linéaire est surjective sur $\R$ ssi elle est non nulle, et $dh_p=0$ ssi $p=\pm e_3$. Donc $h$ est une submersion en tout point sauf aux deux pôles ; ses fibres $h^{-1}(c)$, $|c|<1$, sont des cercles de latitude, qui sont bien des sous-variétés ([[ch09-fibres-submersion-image-immersion]]).
* **Projection verticale de la sphère.** $\varphi:\mathbb S^2\to\R^2$, $(x,y,z)\mapsto(x,y)$. En un point $p=(\cos\theta,\sin\theta,0)$ de l'équateur, $T_p\mathbb S^2$ a pour base $(-\sin\theta,\cos\theta,0)$ et $e_3$, envoyés sur $(-\sin\theta,\cos\theta)$ et $0$ : $d\varphi_p$ est de rang $1$, ni injective ni surjective. Hors de l'équateur, $d\varphi_p$ est un isomorphisme (dimensions égales à $2$).
* **$z\mapsto z^2$ sur le cercle.** C'est une immersion et une submersion (en tout point $d\varphi_p$ est un isomorphisme entre droites), mais elle n'est pas injective : deux points antipodaux ont la même image.

## Pièges

* > ⚠️ « Immersion » est une propriété de la **différentielle**, pas de l'application : une immersion n'est pas forcément injective ($z\mapsto z^2$ sur $\mathbb S^1$ ; voir aussi [[ch09-contre-ex-point-multiple]]), et l'image d'une immersion injective n'est pas forcément une sous-variété ([[ch09-contre-ex-folium]]). Seule l'image **locale** est une sous-variété ([[ch09-fibres-submersion-image-immersion]]).
* > ⚠️ Le but de $d\varphi_p$ est $T_{\varphi(p)}S_2$, **pas** $\R^{N_2}$ : $\mathrm{Id}_{\mathbb S^1}:\mathbb S^1\to\mathbb S^1$ est une submersion, mais vue comme application $\mathbb S^1\to\R^2$ (l'inclusion), elle n'en est pas une. Toujours préciser la sous-variété d'arrivée.
* Pour une fonction $f:S\to\R$, « submersion en $p$ » $\iff$ $df_p\ne0$ $\iff$ $p$ n'est pas un point critique ([[ch09-point-critique-sous-variete-def]]).
* Ne pas tester l'injectivité ou la surjectivité sur la différentielle d'un prolongement $F$ défini sur un ouvert de $\R^{N_1}$ : c'est la restriction $dF_p|_{T_pS_1}$ qui compte (et elle est à valeurs dans $T_{\varphi(p)}S_2$).
