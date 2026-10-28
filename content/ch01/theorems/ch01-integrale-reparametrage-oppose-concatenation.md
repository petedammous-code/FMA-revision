---
id: ch01-integrale-reparametrage-oppose-concatenation
type: proposition
chapter: 1
title: Invariance par reparamétrage croissant, changement de signe par chemin opposé, additivité par concaténation
ref: Proposition I.5.6
page: 16
importance: 2
depends: [ch01-def-integrale-chemin, ch01-def-chemins-composables, ch01-def-chemin-lacet]
tags: [integrale-curviligne, reparametrage, chemin-oppose, concatenation, chasles]
---
## Intuition

> 💡 L'intégrale $\int_\gamma f(z)\,dz$ est une somme de « $f\times$ petits pas $\Delta z$ ». Elle ne dépend donc que **des pas effectués**, pas du temps mis à les faire : parcourir le chemin plus vite ou plus lentement ne change rien (i). Si l'on parcourt le chemin à l'envers, chaque pas $\Delta z$ est remplacé par $-\Delta z$ : l'intégrale change de signe (ii). Et si l'on enchaîne deux trajets, les sommes s'ajoutent (iii) : c'est la relation de Chasles.

Ces trois règles permettent de parler de l'intégrale « sur un cercle orienté » ou « sur le bord d'un triangle » sans préciser le paramétrage, et de découper un contour compliqué en morceaux simples. Termes utilisés : chemin, chemin opposé $\gamma^{opp}$ ([[ch01-def-chemin-lacet]]), chemin composé $\gamma_1\vee\gamma_2$ ([[ch01-def-chemins-composables]]), intégrale le long d'un chemin ([[ch01-def-integrale-chemin]]). Un **$C^1$-difféomorphisme** $\varphi:[\tilde a,\tilde b]\to[a,b]$ est une bijection de classe $C^1$ dont la réciproque est aussi de classe $C^1$.

## Énoncé

**Proposition (poly, Proposition I.5.6, p. 16).** Soit $f$ une fonction continue définie sur l'ouvert $\Omega$. Alors :

1. si $\gamma:[a,b]\to\Omega$ est un chemin et si $\varphi:[\tilde a,\tilde b]\to[a,b]$ est un $C^1$-difféomorphisme croissant,
$$
\int_\gamma f(z)\,dz=\int_{\tilde\gamma}f(z)\,dz,\qquad\text{où } \tilde\gamma:=\gamma\circ\varphi\ ;
$$
2. si $\gamma:[a,b]\to\Omega$ est un chemin, alors
$$
\int_\gamma f(z)\,dz=-\int_{\gamma^{opp}}f(z)\,dz\ ;
$$
3. si $\gamma_1:[a_1,b_1]\to\Omega$ et $\gamma_2:[a_2,b_2]\to\Omega$ sont deux chemins composables, alors
$$
\int_{\gamma_1\vee\gamma_2}f(z)\,dz=\int_{\gamma_1}f(z)\,dz+\int_{\gamma_2}f(z)\,dz.
$$

(Dans le poly ces trois points sont numérotés (i), (ii), (iii).)

## Hypothèses

### H1 — $f$ continue sur $\Omega$

**Rôle.** Cadre de la définition de l'intégrale le long d'un chemin ([[ch01-def-integrale-chemin]]) : elle rend les intégrandes continus par morceaux, et permet d'appliquer la formule de changement de variable (qui demande un intégrande continu sur chaque morceau).

**Si on la retire.** Les intégrales ne sont plus nécessairement définies ; c'est une hypothèse de cadre plus qu'une hypothèse « active ».

### H2 — $\varphi$ croissante (dans le point 1)

**Rôle.** Elle garantit $\varphi(\tilde a)=a$ et $\varphi(\tilde b)=b$ : $\tilde\gamma$ a la même origine, la même extrémité et le même sens de parcours que $\gamma$. C'est exactement ce qu'utilise le changement de variable $t=\varphi(s)$.

**Si on la retire.** Un difféomorphisme **décroissant** inverse le sens et change le signe. Exemple : $\gamma(t)=t$ sur $[0,1]$, $f\equiv1$ : $\int_\gamma dz=\int_0^11\,dt=1$. Avec $\varphi(s)=1-s$ (décroissant, de $[0,1]$ sur $[0,1]$), $\tilde\gamma(s)=1-s$ et $\int_{\tilde\gamma}dz=\int_0^1(-1)\,ds=-1$. En général, pour $\varphi$ décroissant, $\gamma\circ\varphi$ est un reparamétrage croissant de $\gamma^{opp}$, d'où $\int_{\gamma\circ\varphi}=-\int_\gamma$ par les points 1 et 2.

### H3 — $\varphi$ est un $C^1$-difféomorphisme de $[\tilde a,\tilde b]$ **sur** $[a,b]$

**Rôle.** La bijectivité assure que $\tilde\gamma$ parcourt **tout** $\gamma$, exactement une fois ; la régularité $C^1$ de $\varphi$ et $\varphi^{-1}$ assure que $\tilde\gamma$ est encore un chemin ($C^1$ par morceaux) et que les points de raccord de $\gamma$ correspondent à des points de raccord de $\tilde\gamma$.

**Si on la retire.** Si $\varphi$ n'est pas surjective, on ne parcourt qu'une partie du chemin : $\gamma(t)=e^{it}$ sur $[0,2\pi]$ et $\varphi:[0,\pi]\to[0,2\pi]$, $\varphi(s)=s$ donnent le demi-cercle supérieur, et $\int_{\tilde\gamma}\frac{dz}{z}=i\pi\ne2i\pi$. Par ailleurs $s\mapsto e^{2is}$, $s\in[0,2\pi]$, a la même image que $\gamma$ mais n'est **pas** un reparamétrage de $\gamma$ ($\varphi(s)=2s$ envoie $[0,2\pi]$ sur $[0,4\pi]$) : il fait deux tours et $\int\frac{dz}{z}=4i\pi$. (Honnêtement : quand $\gamma$ est de classe $C^1$, la preuve ci-dessous marche pour toute $\varphi$ de classe $C^1$ avec $\varphi(\tilde a)=a$, $\varphi(\tilde b)=b$, même non monotone ; c'est la conservation des extrémités qui est essentielle.)

### H4 — $\gamma_1$ et $\gamma_2$ composables (dans le point 3)

**Rôle.** Sans $\gamma_1(b_1)=\gamma_2(a_2)$, le chemin $\gamma_1\vee\gamma_2$ n'est pas défini ([[ch01-def-chemins-composables]]) ; le membre de droite a un sens, mais il n'est l'intégrale sur aucun chemin.

## Idée de la preuve

Tout est un changement de variable dans des intégrales sur des intervalles : $t=\varphi(s)$ pour (i), $u=a+b-t$ pour (ii), et Chasles au point $b_1$ suivi de la translation $s=t+a_2-b_1$ pour (iii). On travaille morceau par morceau, là où tout est continu.

## Preuve

*Le poly laisse cette preuve en exercice (« ne pose aucune difficulté ») ; voici une rédaction complète.* Notation : si $a=t_0<\dots<t_n=b$ est une subdivision adaptée au chemin $\gamma$, on note $g_k:[t_{k-1},t_k]\to\C$ le prolongement continu de $t\mapsto f(\gamma(t))\gamma'(t)$ (il existe car $f\circ\gamma$ est continue et $\gamma'$ a des limites à droite et à gauche, [[ch01-def-chemin-lacet]]). Par définition, $\int_\gamma f(z)\,dz=\sum_k\int_{t_{k-1}}^{t_k}g_k(t)\,dt$ ([[ch01-def-integrale-chemin]]).

**(i) Reparamétrage.** Comme $\varphi$ est une bijection continue croissante de $[\tilde a,\tilde b]$ sur $[a,b]$, $\varphi(\tilde a)=a$ et $\varphi(\tilde b)=b$. Posons $s_k=\varphi^{-1}(t_k)$ : c'est une subdivision $\tilde a=s_0<\dots<s_n=\tilde b$. Sur $]s_{k-1},s_k[$, $\varphi$ est à valeurs dans $]t_{k-1},t_k[$, donc $\tilde\gamma=\gamma\circ\varphi$ y est $C^1$ avec $\tilde\gamma'(s)=\gamma'(\varphi(s))\varphi'(s)$ (dérivation d'une composée de fonctions d'une variable réelle), et cette dérivée a des limites aux bouts ; avec la continuité de $\tilde\gamma$, cela montre que $\tilde\gamma$ est un chemin de $\Omega$. Sur $]s_{k-1},s_k[$, l'intégrande de $\int_{\tilde\gamma}$ vaut $f(\gamma(\varphi(s)))\gamma'(\varphi(s))\varphi'(s)=g_k(\varphi(s))\varphi'(s)$. Par la formule de changement de variable $t=\varphi(s)$ (valable pour $g_k$ continue et $\varphi$ de classe $C^1$) :
$$
\int_{s_{k-1}}^{s_k}g_k(\varphi(s))\,\varphi'(s)\,ds=\int_{\varphi(s_{k-1})}^{\varphi(s_k)}g_k(t)\,dt=\int_{t_{k-1}}^{t_k}g_k(t)\,dt.
$$
En sommant sur $k$ : $\int_{\tilde\gamma}f(z)\,dz=\int_\gamma f(z)\,dz$.

**(ii) Chemin opposé.** $\gamma^{opp}(t)=\gamma(a+b-t)$ est continu, et $C^1$ sur chaque $]a+b-t_k,\,a+b-t_{k-1}[$ avec $(\gamma^{opp})'(t)=-\gamma'(a+b-t)$ (limites aux bouts incluses) : c'est un chemin. Le changement de variable $u=a+b-t$ (donc $dt=-du$, et $t=a\mapsto u=b$, $t=b\mapsto u=a$) donne
$$
\int_{\gamma^{opp}}f(z)\,dz=\int_a^b f(\gamma(a+b-t))\bigl(-\gamma'(a+b-t)\bigr)\,dt=\int_b^a f(\gamma(u))\bigl(-\gamma'(u)\bigr)(-du)=\int_b^a f(\gamma(u))\gamma'(u)\,du=-\int_\gamma f(z)\,dz,
$$
le calcul étant fait morceau par morceau comme en (i) (sur chaque morceau l'intégrande est continu, et les valeurs aux points de raccord ne comptent pas).

**(iii) Concaténation.** Notons $\gamma=\gamma_1\vee\gamma_2$, défini sur $[a_1,c]$ avec $c=b_1+b_2-a_2$ ; c'est un chemin ([[ch01-def-chemins-composables]]). Par la relation de Chasles pour les intégrales sur un intervalle,
$$
\int_\gamma f(z)\,dz=\int_{a_1}^{b_1}f(\gamma(t))\gamma'(t)\,dt+\int_{b_1}^{c}f(\gamma(t))\gamma'(t)\,dt.
$$
Sur $[a_1,b_1]$, $\gamma=\gamma_1$ (et $\gamma'=\gamma_1'$ sauf en un nombre fini de points) : le premier terme vaut $\int_{\gamma_1}f(z)\,dz$. Sur $[b_1,c]$, $\gamma(t)=\gamma_2(t+a_2-b_1)$ et $\gamma'(t)=\gamma_2'(t+a_2-b_1)$ (sauf en un nombre fini de points) ; la translation $s=t+a_2-b_1$, qui envoie $[b_1,c]$ sur $[a_2,b_2]$, donne
$$
\int_{b_1}^{c}f(\gamma_2(t+a_2-b_1))\,\gamma_2'(t+a_2-b_1)\,dt=\int_{a_2}^{b_2}f(\gamma_2(s))\gamma_2'(s)\,ds=\int_{\gamma_2}f(z)\,dz.
$$
D'où $\int_{\gamma_1\vee\gamma_2}f(z)\,dz=\int_{\gamma_1}f(z)\,dz+\int_{\gamma_2}f(z)\,dz$. $\square$

## Preuve à trous

On note $g_k$ le prolongement continu de $f(\gamma(t))\gamma'(t)$ à $[t_{k-1},t_k]$, pour une subdivision $(t_k)$ adaptée à $\gamma$.

**(i)** Comme $\varphi$ est croissante et bijective, <trou indice="que valent φ(ã) et φ(b̃) ?">$\varphi(\tilde a)=a$ et $\varphi(\tilde b)=b$</trou> ; avec $s_k=\varphi^{-1}(t_k)$, on a sur $]s_{k-1},s_k[$ : $\tilde\gamma'(s)=\gamma'(\varphi(s))\varphi'(s)$, donc
$$
\int_{s_{k-1}}^{s_k}g_k(\varphi(s))\varphi'(s)\,ds=\int_{t_{k-1}}^{t_k}g_k(t)\,dt
$$
par <trou indice="quelle formule d'intégration ?">le changement de variable $t=\varphi(s)$</trou>, et on somme sur $k$.

**(ii)** On a $(\gamma^{opp})'(t)=$ <trou indice="dériver t ↦ γ(a+b−t)">$-\gamma'(a+b-t)$</trou>, puis le changement de variable $u=a+b-t$ donne
$$
\int_{\gamma^{opp}}f(z)\,dz=\int_b^a f(\gamma(u))\bigl(-\gamma'(u)\bigr)(-du)=-\int_a^bf(\gamma(u))\gamma'(u)\,du.
$$

**(iii)** On coupe $[a_1,b_1+b_2-a_2]$ au point <trou>$b_1$ (relation de Chasles) : le morceau $[a_1,b_1]$ donne $\int_{\gamma_1}f(z)\,dz$</trou>, et sur $[b_1,b_1+b_2-a_2]$ la translation <trou indice="quel changement de variable ramène à l'intervalle de γ₂ ?">$s=t+a_2-b_1$, qui envoie cet intervalle sur $[a_2,b_2]$</trou> donne $\int_{\gamma_2}f(z)\,dz$. $\square$

## Exemples

* **Cercle parcouru plus vite.** $\tilde\gamma(s)=z_0+re^{2is}$, $s\in[0,\pi]$, est $\gamma\circ\varphi$ avec $\gamma(t)=z_0+re^{it}$ sur $[0,2\pi]$ et $\varphi(s)=2s$ (difféomorphisme croissant de $[0,\pi]$ sur $[0,2\pi]$). Vérification directe : $\int_{\tilde\gamma}\frac{dz}{z-z_0}=\int_0^\pi\frac{2ire^{2is}}{re^{2is}}\,ds=2i\pi$, comme pour $\gamma$ ([[ch01-integrale-sur-cercle]]).
* **Cercle dans le sens indirect.** $\gamma^{opp}(t)=z_0+re^{-it}$ : $\int_{\gamma^{opp}}\frac{dz}{z-z_0}=\int_0^{2\pi}\frac{-ire^{-it}}{re^{-it}}\,dt=-2i\pi=-\int_\gamma\frac{dz}{z-z_0}$.
* **Bord d'un triangle par morceaux.** Soit $T$ le lacet bord du triangle $0\to1\to1+i\to0$, c'est-à-dire $[0,1]\vee[1,1+i]\vee[1+i,0]$ (notations de [[ch01-def-chemins-composables]]). Avec $\sigma=[0,1+i]$, on a $[1+i,0]=\sigma^{opp}$. Par (iii) et (ii), et les calculs de [[ch01-def-integrale-chemin]] :
$$
\int_T\bar z\,dz=\underbrace{\int_{[0,1]}\bar z\,dz+\int_{[1,1+i]}\bar z\,dz}_{=\frac12+\left(\frac12+i\right)}-\int_\sigma\bar z\,dz=(1+i)-1=i.
$$
On retrouve $2i\times$ l'aire du triangle ($\tfrac12$), comme le prédit la formule de Green–Riemann. Pour $f(z)=z$, le même découpage donne $i-i=0$.

## Pièges

* > ⚠️ « L'intégrale ne dépend pas du paramétrage » est vrai pour les reparamétrages **croissants et bijectifs** seulement : un reparamétrage décroissant change le signe, et un paramétrage qui fait plusieurs tours (même image !) multiplie l'intégrale.
* Ne pas confondre $\gamma^{opp}$ (même intervalle $[a,b]$, sens inverse) avec $\gamma\circ\varphi$ pour $\varphi$ croissante.
* Dans (iii), l'ordre $\gamma_1$ puis $\gamma_2$ est imposé par la composabilité, mais le résultat est symétrique : c'est ce qui permet de **découper** un lacet en morceaux dans n'importe quel ordre pour le calcul.
* Pour un chemin $C^1$ par morceaux, tous les changements de variable se font **morceau par morceau** : c'est là que l'intégrande est continu.
