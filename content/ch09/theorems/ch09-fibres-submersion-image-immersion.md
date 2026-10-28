---
id: ch09-fibres-submersion-image-immersion
type: proposition
chapter: 9
title: Fibre locale d'une submersion et image locale d'une immersion sont des sous-variétés
ref: Proposition IX.7.29
page: 167
importance: 2
depends: [ch09-redressement-local, ch09-sous-variete-equation-valeur-reguliere, ch09-ex-image-immersion-locale, ch09-ex-ouvert-de-sous-variete, ch09-espace-tangent-image-dx, ch09-immersion-submersion-sous-varietes-def, ch09-differentielle-entre-sous-varietes-def, ch09-composition-differentielles, ch09-remarques-applications-cr]
tags: [sous-variete, submersion, immersion, fibre, image, redressement, valeur-reguliere]
---
## Intuition

> 💡 Ce sont les deux façons de **fabriquer** des sous-variétés, transportées d'un ouvert de $\R^m$ vers une sous-variété. Une **submersion** (différentielle surjective) ressemble localement à une projection $(u,v)\mapsto u$ : ses fibres (« les points qui ont la même image ») sont comme les tranches $\{u=\text{cste}\}$, donc lisses, de dimension « départ moins arrivée ». Une **immersion** (différentielle injective) ressemble localement à une inclusion $u\mapsto(u,0)$ : un petit morceau de la source est déposé fidèlement dans le but, et forme une sous-variété de même dimension.

Exemple mental : l'altitude $z$ sur la sphère $\mathbb S^2$ est une submersion hors des pôles, ses fibres sont les cercles de latitude ; une courbe régulière tracée sur $\mathbb S^2$ est une immersion d'un intervalle, son image locale est un petit arc lisse.

Vocabulaire : $S_1\subset\R^{N_1}$, $S_2\subset\R^{N_2}$ sont des **sous-variétés** ([[ch09-sous-variete-def]]) ; $T_pS$ est l'**espace tangent** ($=dx_q(\R^m)$ pour un paramétrage $x$ avec $x(q)=p$, [[ch09-espace-tangent-image-dx]]) ; $d\varphi_p:T_pS_1\to T_{\varphi(p)}S_2$ est la **différentielle** ([[ch09-differentielle-entre-sous-varietes-def]]) ; $\varphi$ est une **submersion** (resp. **immersion**) en $p$ si $d\varphi_p$ est surjective (resp. injective) ([[ch09-immersion-submersion-sous-varietes-def]]).

## Énoncé

**Proposition (poly, Proposition IX.7.29, p. 167).** Soient $S_1$ et $S_2$ deux sous-variétés (respectivement de $\R^{N_1}$ et $\R^{N_2}$), et $\varphi : S_1\to S_2$ une application de classe $C^k$.

1. Supposons que $\varphi$ soit une submersion en $p\in S_1$. Alors il existe un voisinage $W_1$ de $p$ dans $S_1$ tel que $W_1\cap\varphi^{-1}(\{\varphi(p)\})$ soit une sous-variété de $\R^{N_1}$, incluse dans $S_1$.
2. Supposons que $\varphi$ soit une immersion en $p\in S_1$. Alors il existe un voisinage $W_1$ de $p$ dans $S_1$ tel que $\varphi(W_1)$ soit une sous-variété de $\R^{N_2}$, incluse dans $S_2$.

*Précision donnée par la preuve.* Avec $m_1=\dim S_1$ et $m_2=\dim S_2$ : dans le point 1, la sous-variété $W_1\cap\varphi^{-1}(\{\varphi(p)\})$ est de dimension $m_1-m_2$ ; dans le point 2, $\varphi(W_1)$ est de dimension $m_1$. Toutes deux sont de classe $C^k$ (pour $S_1$, $S_2$ de classe au moins $C^k$, $k\ge1$).

## Hypothèses

### H1 — $\varphi$ de classe $C^k$, $k\ge1$

**Rôle.** La preuve applique la Proposition IX.4.1 (point 1) et l'Exemple IX.2.9 à des lectures de $\varphi$ dans des paramétrages ; ces deux résultats reposent sur le théorème d'inversion locale, qui exige une application de classe $C^1$ au moins (pas seulement différentiable au point $p$).

**Si on la retire.** Prenons $S_1=\R^2$, $S_2=\R$ et $\varphi(a,b)=a$ si $a\le 0$, $\varphi(a,b)=\dfrac{a(a-b^2)}{b^2}$ si $0\le a\le b^2$ (et $b\neq0$), $\varphi(a,b)=a-b^2$ si $a\ge b^2$. Les formules se recollent (elles valent $0$ sur $a=0$ et sur $a=b^2$), donc $\varphi$ est continue. Dans la région du milieu $|\varphi|\le a\le b^2$, donc dans les trois régions $|\varphi(a,b)-a|\le 2b^2$ : $\varphi(a,b)=a+o(\norm{(a,b)})$, $\varphi$ est différentiable en $0$ avec $d\varphi_0=(h,k)\mapsto h$, surjective. Mais $\varphi^{-1}(\{0\})=\{a=0\}\cup\{a=b^2\}$ : une droite et une parabole tangentes en $0$. Dans tout voisinage de $0$, retirer l'origine laisse au moins $4$ branches, alors qu'un intervalle privé d'un point n'a que $2$ composantes connexes ; ce n'est ni un ensemble discret, ni un ouvert de $\R^2$ : ce n'est pas une sous-variété (même argument que pour la croix, [[ch09-contre-ex-croix]]). Ici $\varphi$ est différentiable en $0$ mais n'est pas $C^1$ près de $0$ (elle n'est même pas différentiable aux points $(0,b)$, $b\neq0$ : la dérivée partielle en $a$ y vaut $1$ à gauche et $-1$ à droite).

### H2 — Point 1 : $d\varphi_p$ surjective

**Rôle.** Elle rend surjective la différentielle de la lecture $\theta$ de $\varphi$ en cartes, ce qui permet d'appliquer la Proposition IX.4.1 (« image réciproque d'une valeur régulière »).

**Si on la retire.** $S_1=\R^2$, $S_2=\R$, $\varphi(a,b)=ab$, $p=(0,0)$ : $d\varphi_p=0$ n'est pas surjective, et $\varphi^{-1}(\{0\})$ est la croix $(\R\times\{0\})\cup(\{0\}\times\R)$, qui n'est une sous-variété dans aucun voisinage de $0$ ([[ch09-contre-ex-croix]]).

### H3 — Point 2 : $d\varphi_p$ injective

**Rôle.** Elle rend injective la différentielle de $\varphi\circ x_1$ en $q_1$, ce qui permet d'appliquer l'Exemple IX.2.9 (image locale d'une immersion).

**Si on la retire.** $S_1=S_2=\R$, $\varphi(t)=t^2$, $p=0$ : $d\varphi_0=0$. Tout voisinage $W_1$ de $0$ contient un intervalle $]-\eps,\eps[$, donc $\varphi(W_1)$ contient $[0,\eps^2[$ et est contenu dans $[0,+\infty[$. Ce n'est pas une sous-variété de dimension $0$ (pas discret) ni de dimension $1$ (une sous-variété de dimension $1$ de $\R$ est un ouvert de $\R$, or $0\in\varphi(W_1)$ n'est pas intérieur). Autre exemple : $t\mapsto(t^2,t^3)$, dont l'image locale est le cusp (poly, Exercice IX.2.13, p. 150).

### H4 — Le voisinage $W_1$ (conclusion locale)

**Rôle.** On ne sait contrôler $\varphi$ qu'au voisinage de $p$ (inversion locale).

**Si on la retire.** Point 1 : $\varphi(a,b)=ab$ est une submersion en $p=(1,0)$ ($d\varphi_p=(h,k)\mapsto k$), mais la fibre **entière** $\varphi^{-1}(\{0\})$ est la croix, qui n'est pas une sous-variété (le problème est en $(0,0)$, loin de $p$). Point 2 : $t\mapsto(t^3-4t,t^2-4)$ est une immersion en tout point de $\R$, mais son image globale a un point double et n'est pas une sous-variété ([[ch09-contre-ex-point-multiple]]) ; de même pour le folium de Descartes, image d'une immersion injective ([[ch09-contre-ex-folium]]).

## Idée de la preuve

On lit $\varphi$ dans des cartes pour se ramener à un ouvert de $\R^{m_1}$. Point 1 : après redressement de $S_2$ ([[ch09-redressement-local]]), $\theta=p_1\circ\Phi_2\circ\varphi\circ x_1$ est une submersion entre ouverts, sa fibre est une sous-variété (IX.4.1) que $x_1$ transporte dans $S_1$. Point 2 : $\varphi\circ x_1$ est une immersion d'un ouvert de $\R^{m_1}$ dans $\R^{N_2}$, d'image locale sous-variété (IX.2.9).

## Preuve

Notons $m_1$ et $m_2$ les dimensions de $S_1$ et $S_2$, et fixons un paramétrage local $x_1:U_1\to S_1$ en $p$, $x_1(q_1)=p$. Rappelons que $d(x_1)_{q_1}$ est un isomorphisme de $\R^{m_1}$ sur $T_pS_1$ ([[ch09-espace-tangent-image-dx]]) et que, $\varphi$ étant $C^k$ de $S_1$ dans $S_2$, l'application $\varphi\circ x_1:U_1\to\R^{N_2}$ est de classe $C^k$ avec $d(\varphi\circ x_1)_{q_1}=d\varphi_p\circ d(x_1)_{q_1}$ ([[ch09-remarques-applications-cr]], [[ch09-differentielle-entre-sous-varietes-def]], propriété 1).

**Point 1.** *Redressement du but.* Par la Proposition IX.3.1 ([[ch09-redressement-local]]) appliquée à $S_2$ en $\varphi(p)$, il existe un voisinage ouvert $V_2'$ de $\varphi(p)$ dans $\R^{N_2}$, un ouvert $W_2$ de $\R^{N_2}$ et un $C^k$-difféomorphisme $\Phi_2:V_2'\to W_2$ avec $\Phi_2(V_2'\cap S_2)=(\R^{m_2}\times\{0\})\cap W_2$. Soit $p_1:\R^{N_2}\to\R^{m_2}$ la projection sur les $m_2$ premières coordonnées.

*Passage en carte à la source* (c'est le point sur lequel le poly met en garde : la Proposition IX.4.1 s'applique à une application définie sur un **ouvert** de $\R^N$, pas sur $S_1$). L'ensemble $U_1'=(\varphi\circ x_1)^{-1}(V_2')$ est un ouvert de $U_1$ contenant $q_1$ (continuité), et
$$
\theta=p_1\circ\Phi_2\circ\varphi\circ x_1 : U_1'\longrightarrow\R^{m_2}
$$
est de classe $C^k$, de différentielle $d\theta_{q_1}=p_1\circ d(\Phi_2)_{\varphi(p)}\circ d\varphi_p\circ d(x_1)_{q_1}$. Calculons l'image : $d(x_1)_{q_1}(\R^{m_1})=T_pS_1$ ; $d\varphi_p(T_pS_1)=T_{\varphi(p)}S_2$ (submersion) ; $d(\Phi_2)_{\varphi(p)}$ envoie $T_{\varphi(p)}S_2$ dans $\R^{m_2}\times\{0\}$ (une courbe $\alpha$ tracée sur $S_2$ est envoyée par $\Phi_2$ sur une courbe tracée dans $\R^{m_2}\times\{0\}$, dont la vitesse y reste), injectivement ($d\Phi_2$ est un isomorphisme), donc **sur** $\R^{m_2}\times\{0\}$ par égalité des dimensions ; enfin $p_1$ envoie $\R^{m_2}\times\{0\}$ sur $\R^{m_2}$. Donc $d\theta_{q_1}$ est surjective.

*Fibre dans la carte.* Par la Proposition IX.4.1, point 1 ([[ch09-sous-variete-equation-valeur-reguliere]]), appliquée à $\theta$ (ici « $N$ » $=m_1$, « $N-m$ » $=m_2$), il existe un ouvert $V_1\subset U_1'$ contenant $q_1$ tel que $Z=\theta^{-1}(\{\theta(q_1)\})\cap V_1$ soit une sous-variété de $\R^{m_1}$, de dimension $m_1-m_2$ et de classe $C^k$. (Si $m_2=0$, $S_2$ est discrète, $\varphi$ continue est constante près de $p$ et l'on prend pour $W_1$ un voisinage ouvert de $p$ sur lequel $\varphi\equiv\varphi(p)$ : c'est un ouvert de $S_1$, donc une sous-variété, [[ch09-ex-ouvert-de-sous-variete]].)

*Transport par $x_1$.* Montrons que $x_1(Z)$ est une sous-variété de $\R^{N_1}$ de dimension $m_1-m_2$ (c'est l'esprit de l'Exemple IX.2.9, [[ch09-ex-image-immersion-locale]]). Soit $z\in Z$ et $y:U\to Z$ un paramétrage local de $Z$ en $z$, homéomorphisme sur $Z\cap O$ ($O$ ouvert de $\R^{m_1}$). Alors $x_1\circ y$ est de classe $C^k$, de différentielle $d(x_1)_{y(u)}\circ dy_u$ injective (composée d'injections), et c'est un homéomorphisme de $U$ sur $x_1(Z\cap O)$ car $x_1$ est un homéomorphisme de $U_1$ sur son image. Comme $x_1(U_1)$ porte la topologie induite par $\R^{N_1}$, $x_1(Z\cap O)$ est un ouvert relatif de $x_1(Z)$, c'est-à-dire de la forme $O'\cap x_1(Z)$ avec $O'$ ouvert de $\R^{N_1}$ : $x_1\circ y$ est un paramétrage local de $x_1(Z)$ en $x_1(z)$.

*Identification.* Posons $W_1=x_1(V_1)$, voisinage ouvert de $p$ dans $S_1$. Pour $u\in V_1$, les points $\Phi_2(\varphi(x_1(u)))$ et $\Phi_2(\varphi(p))$ sont dans $\R^{m_2}\times\{0\}$, où $p_1$ est injective ; donc $\theta(u)=\theta(q_1)\iff\Phi_2(\varphi(x_1(u)))=\Phi_2(\varphi(p))\iff\varphi(x_1(u))=\varphi(p)$. Ainsi $x_1(Z)=W_1\cap\varphi^{-1}(\{\varphi(p)\})$, qui est donc une sous-variété de $\R^{N_1}$ de dimension $m_1-m_2$, incluse dans $S_1$.

**Point 2.** *Variante du poly :* le poly redresse $S_1$ en $(\R^{m_1}\times\{0\})\cap V_1$ puis invoque l'Exemple IX.2.9 ; cela revient exactement à travailler avec le paramétrage $x_1$, ce que l'on fait ici. L'application $\psi=\varphi\circ x_1:U_1\to\R^{N_2}$ est de classe $C^k$ et $d\psi_{q_1}=d\varphi_p\circ d(x_1)_{q_1}$ est injective (composée de l'isomorphisme $d(x_1)_{q_1}:\R^{m_1}\to T_pS_1$ et de l'injection $d\varphi_p$). D'après l'Exemple IX.2.9 ([[ch09-ex-image-immersion-locale]], qui repose sur la Proposition IX.1.2), il existe un voisinage ouvert $U_1''$ de $q_1$ dans $U_1$ tel que $\psi(U_1'')$ soit une sous-variété de $\R^{N_2}$ de dimension $m_1$, paramétrée par $\psi$. On pose $W_1=x_1(U_1'')$ : c'est un voisinage ouvert de $p$ dans $S_1$, et $\varphi(W_1)=\psi(U_1'')$ est une sous-variété de $\R^{N_2}$ de dimension $m_1$, incluse dans $S_2$ puisque $\varphi$ est à valeurs dans $S_2$. $\square$

## Preuve à trous

Soit $x_1:U_1\to S_1$ un paramétrage en $p=x_1(q_1)$.

**Point 1.** On redresse $S_2$ près de $\varphi(p)$ par un difféomorphisme $\Phi_2:V_2'\to W_2$ avec $\Phi_2(V_2'\cap S_2)=(\R^{m_2}\times\{0\})\cap W_2$, et on note $p_1$ la projection sur $\R^{m_2}$. On ne peut pas appliquer IX.4.1 directement à $p_1\circ\Phi_2\circ\varphi$ car <trou indice="sur quoi est définie cette application ?">elle est définie sur $S_1$ et non sur un ouvert de $\R^{N}$ : il faut aussi passer en carte à la source</trou>. On considère donc $\theta=p_1\circ\Phi_2\circ\varphi\circ x_1$, définie sur un ouvert de $\R^{m_1}$ et de classe $C^k$. Sa différentielle en $q_1$ est surjective car <trou indice="suivre l'image de R^{m_1} à travers chaque facteur">$d(x_1)_{q_1}(\R^{m_1})=T_pS_1$, $d\varphi_p(T_pS_1)=T_{\varphi(p)}S_2$, $d(\Phi_2)_{\varphi(p)}(T_{\varphi(p)}S_2)=\R^{m_2}\times\{0\}$ et $p_1(\R^{m_2}\times\{0\})=\R^{m_2}$</trou>. Par IX.4.1, $Z=\theta^{-1}(\{\theta(q_1)\})\cap V_1$ est une sous-variété de dimension $m_1-m_2$ de $\R^{m_1}$. Son image $x_1(Z)$ est une sous-variété de $\R^{N_1}$ car <trou indice="composer un paramétrage de Z avec x_1">pour un paramétrage $y$ de $Z$, $x_1\circ y$ est une immersion $C^k$ et un homéomorphisme sur un ouvert relatif de $x_1(Z)$</trou>. Enfin, comme $p_1$ est injective sur $\R^{m_2}\times\{0\}$ et $\Phi_2$ injective, $\theta(u)=\theta(q_1)\iff\varphi(x_1(u))=\varphi(p)$, d'où $x_1(Z)=W_1\cap\varphi^{-1}(\{\varphi(p)\})$ avec $W_1=x_1(V_1)$.

**Point 2.** L'application $\psi=\varphi\circ x_1$ est $C^k$ sur l'ouvert $U_1$ et <trou indice="composée de quelles applications linéaires ?">$d\psi_{q_1}=d\varphi_p\circ d(x_1)_{q_1}$ est injective</trou> ; par l'Exemple IX.2.9, $\psi(U_1'')$ est une sous-variété de dimension $m_1$ pour un voisinage ouvert $U_1''$ de $q_1$, et l'on prend $W_1=x_1(U_1'')$. $\square$

## Exemples

* **Cercles de latitude.** $\varphi:\mathbb S^2\to\R$, $\varphi(x,y,z)=z$. Sa différentielle est $d\varphi_p(v)=v_3$ sur $T_p\mathbb S^2=p^\perp$ ([[ch09-ex-fonction-hauteur]]) ; elle est nulle si et seulement si $e_3\in(p^\perp)^\perp=\R p$, c'est-à-dire $p=\pm e_3$. En tout point $p\neq\pm e_3$, $\varphi$ est une submersion et le point 1 dit que, près de $p$, $\{z=p_3\}\cap\mathbb S^2$ est une sous-variété de dimension $2-1=1$ : c'est bien un arc du cercle de latitude $\{x^2+y^2=1-p_3^2,\ z=p_3\}$.
* **Hélice tracée sur un cylindre.** $S_1=\R$, $S_2=\{x^2+y^2=1\}\subset\R^3$, $\varphi(t)=(\cos t,\sin t,t)$. On a $\varphi'(t)=(-\sin t,\cos t,1)\neq0$, donc $\varphi$ est une immersion en tout point ; par le point 2, chaque $t_0$ a un voisinage $W_1$ tel que $\varphi(W_1)$ soit une sous-variété de dimension $1$ de $\R^3$, contenue dans le cylindre. (Ici c'est même vrai globalement, mais c'est un autre argument : $t$ se lit sur la troisième coordonnée, donc $\varphi$ est un homéomorphisme de $\R$ sur l'hélice. Attention : avec $\varphi(t)=(\cos t,\sin t,t^2)$, qui est aussi une immersion en tout point, l'image globale n'est **pas** une sous-variété : $\varphi(\pi)=\varphi(-\pi)=(-1,0,\pi^2)$ est un point double où les deux branches se croisent, de vitesses $(0,-1,\pm2\pi)$.)
* **Fibres d'une application entre sous-variétés.** $\varphi:\mathbb S^3\subset\C^2\to\R$, $\varphi(z_1,z_2)=|z_1|^2$. C'est la restriction de $g(z_1,z_2)=|z_1|^2$, de différentielle $dg_p(v)=2\Re(\bar z_1v_1)$. Pour $0<c<1$ et $p\in\varphi^{-1}(c)$, le vecteur $v=(z_1,-\frac{c}{1-c}z_2)$ est tangent ($\Re(\bar z_1z_1+\bar z_2v_2)=c-\frac{c}{1-c}(1-c)=0$) et $dg_p(v)=2c\neq0$ : $\varphi$ est une submersion en $p$, donc la fibre $\{|z_1|^2=c,\ |z_2|^2=1-c\}$ (un tore de dimension $3-1=2$) est localement une sous-variété — en fait globalement, puisque c'est vrai en chacun de ses points.

## Pièges

* > ⚠️ La Proposition IX.4.1 et l'Exemple IX.2.9 portent sur des applications définies sur un **ouvert de $\R^m$**. Pour une application définie sur une sous-variété $S_1$, il faut **toujours** composer par un paramétrage $x_1$ à la source ; redresser le but ne suffit pas.
* > ⚠️ Les conclusions sont **locales** : l'image globale d'une immersion (même injective) peut ne pas être une sous-variété (point double, folium) ; la fibre globale d'une application qui est une submersion en un seul point peut être singulière ailleurs. En revanche, si $\varphi$ est une submersion en **tout** point de $\varphi^{-1}(\{c\})$ ($c$ valeur régulière, [[ch09-point-critique-sous-variete-def]]), alors $\varphi^{-1}(\{c\})$ entière est une sous-variété de dimension $m_1-m_2$, car être une sous-variété est une propriété locale.
* Les dimensions : fibre d'une submersion $\Rightarrow$ dimension $\dim S_1-\dim S_2$ (pas $N_1-N_2$, ni $N_1-\dim S_2$) ; image d'une immersion $\Rightarrow$ dimension $\dim S_1$.
* Submersion/immersion se testent sur $d\varphi_p:T_pS_1\to T_{\varphi(p)}S_2$, pas sur la différentielle d'un prolongement de $\varphi$ à un ouvert de $\R^{N_1}$, ni avec $\R^{N_2}$ comme espace d'arrivée.
