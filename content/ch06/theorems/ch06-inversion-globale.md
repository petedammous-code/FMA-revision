---
id: ch06-inversion-globale
type: corollary
chapter: 6
title: Théorème d'inversion globale
ref: Corollaire VI.3.3
page: 120
importance: 3
depends: [ch06-inversion-locale, ch06-diffeomorphisme-def]
tags: [inversion globale, difféomorphisme, injectivité, image ouverte, changement de variables]
---
## Intuition

> 💡 L'inversion locale dit : là où la différentielle est inversible, $f$ est inversible **par morceaux** (sur de petits ouverts). Si en plus $f$ est **injective**, ces inverses locaux ne se contredisent jamais : ils se recollent en un inverse global, régulier parce qu'il l'est localement.

Deux informations de nature différente : l'inversibilité de $df_x$ en chaque point (vérifiable par un calcul de jacobien) donne l'ouverture de l'image et la régularité ; l'injectivité (à vérifier « à la main », c'est une propriété **globale**) donne l'existence de la réciproque. Un **$C^k$-difféomorphisme** de $U$ sur $V$ est une bijection $C^k$ de réciproque $C^k$ ([[ch06-diffeomorphisme-def]]). C'est l'outil standard pour justifier un changement de variables.

## Énoncé

**Corollaire (poly, Corollaire VI.3.3, p. 120).** Soit $f$ une application de classe $C^k$ ($k\ge1$) de $U$ dans $F$, où $U$ est un ouvert d'un espace de Banach réel $E$ et $F$ un espace de Banach. Si $f$ est injective et si pour tout $x$ de $U$ la différentielle $df_x$ de $f$ au point $x$ est un isomorphisme bicontinu, alors $f(U)$ est un ouvert et la bijection réciproque, de $f(U)$ dans $U$, est de classe $C^k$.

Autrement dit, $f$ est un $C^k$-difféomorphisme de $U$ sur l'ouvert $f(U)$.

## Hypothèses

### H1 — $f$ de classe $C^k$, $k\ge1$

**Rôle.** C'est l'hypothèse de régularité de l'inversion locale, appliquée en chaque point ; la réciproque hérite de la classe $C^k$.

**Si on la retire.** Sur $U=\,]-\frac12,\frac12[$, soit $f(x)=2x+x^2\sin(1/x)$, $f(0)=0$. Elle est dérivable partout, $f'(0)=2$ et, pour $x\ne0$, $f'(x)=2+2x\sin(1/x)-\cos(1/x)\ge 1-2|x|>0$ : $f$ est injective (strictement croissante) et $f'$ ne s'annule pas. Son image est bien un intervalle ouvert et $f^{-1}$ est dérivable, mais $f^{-1}$ **n'est pas $C^1$** : sinon $f'=1/\big((f^{-1})'\circ f\big)$ serait continue, alors que $f'(x)$ n'a pas de limite en $0$ (le terme $\cos(1/x)$ oscille). On ne peut pas espérer une réciproque plus régulière que $f$.

### H2 — $f$ injective sur $U$

**Rôle.** Elle sert **uniquement** à définir la réciproque globale ; l'ouverture de $f(U)$ n'en dépend pas.

**Si on la retire.** $f(r,\theta)=(r\cos\theta,r\sin\theta)$ sur $]0,+\infty[\times\R$ (jacobien $r>0$), ou $\exp:\C\to\C$ vue comme application de $\R^2$ dans $\R^2$ (jacobien $|e^z|^2>0$) : différentielle inversible partout, image ouverte ($\R^2\setminus\{0\}$), mais $f(r,\theta)=f(r,\theta+2\pi)$ : pas de réciproque.

### H3 — $df_x$ isomorphisme bicontinu pour **tout** $x\in U$

**Rôle.** On applique l'inversion locale en chaque point de $U$, pas seulement en un point.

**Si on la retire.** $f(x)=x^3$ sur $U=\R$ : injective, $C^\infty$, $f(\R)=\R$ ouvert, mais $f'(0)=0$ et la réciproque $y\mapsto y^{1/3}$ n'est pas dérivable en $0$. Un seul point dégénéré suffit à tuer la régularité de la réciproque.

## Idée de la preuve

Par l'inversion locale, chaque $x\in U$ a un voisinage ouvert $U_x$ que $f$ envoie difféomorphiquement sur un ouvert $f(U_x)$. Donc $f(U)=\bigcup_x f(U_x)$ est ouvert, et la réciproque globale coïncide sur chaque $f(U_x)$ avec l'inverse local, qui est $C^k$.

## Preuve

Le poly dit seulement « on en déduit immédiatement » ; voici l'argument complet.

*Étape 1 : $f(U)$ est ouvert.* Soit $x\in U$. Comme $df_x$ est un isomorphisme bicontinu et $f$ est $C^k$, le théorème d'inversion locale ([[ch06-inversion-locale]]) fournit un voisinage ouvert $U_x\subset U$ de $x$ et un voisinage ouvert $V_x$ de $f(x)$ tels que $f|_{U_x}:U_x\to V_x$ soit un $C^k$-difféomorphisme ; en particulier $V_x=f(U_x)$. Alors
$$
f(U)=\bigcup_{x\in U}f(U_x)=\bigcup_{x\in U}V_x
$$
est une réunion d'ouverts, donc un ouvert.

*Étape 2 : la réciproque est $C^k$.* Comme $f$ est injective, $f:U\to f(U)$ est une bijection ; notons $g:f(U)\to U$ sa réciproque. Soit $x\in U$ et $y\in V_x$. Il existe un unique $x'\in U_x$ avec $f(x')=y$, à savoir $x'=(f|_{U_x})^{-1}(y)$ ; par injectivité de $f$ sur **tout** $U$, $x'$ est aussi l'unique antécédent de $y$ dans $U$, donc $g(y)=x'$. Ainsi
$$
g|_{V_x}=(f|_{U_x})^{-1},
$$
qui est de classe $C^k$ sur l'ouvert $V_x$. Les ouverts $V_x$ recouvrent $f(U)$ et être $C^k$ est une propriété locale (la différentiabilité et la continuité des différentielles successives en un point ne dépendent que des valeurs au voisinage de ce point) : $g$ est de classe $C^k$ sur $f(U)$. $\square$

## Preuve à trous

Soit $x\in U$. Par <trou indice="quel théorème utiliser en chaque point ?">l'inversion locale en $x$ (possible car $df_x$ est un isomorphisme bicontinu)</trou>, il existe un voisinage ouvert $U_x$ de $x$ tel que $f|_{U_x}$ soit un $C^k$-difféomorphisme sur l'ouvert $V_x=f(U_x)$. Donc <trou>$f(U)=\bigcup_{x\in U}V_x$ est une réunion d'ouverts, donc ouvert</trou>.

Soit $g$ la réciproque de la bijection $f:U\to f(U)$. Pour $y\in V_x$, l'unique antécédent de $y$ dans $U_x$ est aussi, <trou indice="où sert l'hypothèse globale ?">par injectivité de $f$ sur $U$, l'unique antécédent dans $U$ ; donc $g|_{V_x}=(f|_{U_x})^{-1}$</trou>, qui est $C^k$. Comme <trou>les $V_x$ recouvrent $f(U)$ et que la classe $C^k$ est une propriété locale</trou>, $g$ est $C^k$. $\square$

## Exemples

* **Polaires sur un domaine d'injectivité.** $f(r,\theta)=(r\cos\theta,r\sin\theta)$ sur $U=\,]0,+\infty[\times]-\pi,\pi[$. Le jacobien vaut $r>0$, et $f$ est injective sur $U$ (si $f(r,\theta)=f(r',\theta')$, alors $r=r'$ en prenant la norme, puis $\theta\equiv\theta'\pmod{2\pi}$ avec $\theta,\theta'\in\,]-\pi,\pi[$, donc $\theta=\theta'$). Conclusion : $f$ est un $C^\infty$-difféomorphisme de $U$ sur l'ouvert $f(U)=\R^2\setminus\big(]-\infty,0]\times\{0\}\big)$ (plan privé de la demi-droite réelle négative).
* **Perturbation de l'identité.** $f(x,y)=\big(x+\tfrac12\sin y,\;y+\tfrac12\sin x\big)$ sur $\R^2$. Jacobien : $\det\begin{pmatrix}1&\frac12\cos y\\ \frac12\cos x&1\end{pmatrix}=1-\tfrac14\cos x\cos y\ge\tfrac34>0$. Injectivité : $f=\mathrm{Id}+h$ avec $h(x,y)=(\frac12\sin y,\frac12\sin x)$, et $|\sin u-\sin v|\le|u-v|$ donne $\norm{h(p)-h(q)}_2\le\frac12\norm{p-q}_2$ ; si $f(p)=f(q)$ alors $\norm{p-q}_2=\norm{h(q)-h(p)}_2\le\frac12\norm{p-q}_2$, donc $p=q$. Ainsi $f$ est un $C^\infty$-difféomorphisme de $\R^2$ sur l'ouvert $f(\R^2)$.
* **Holomorphe.** Une fonction holomorphe injective sur un ouvert $\Omega$ de $\C$ dont la dérivée ne s'annule pas est un biholomorphisme sur l'ouvert $f(\Omega)$ (sa différentielle réelle est la similitude $h\mapsto f'(z)h$, inversible).

## Pièges

* > ⚠️ L'injectivité ne se lit **pas** sur la différentielle : « jacobien partout non nul » ne suffit pas (polaires sur $]0,\infty[\times\R$, $\exp$). Il faut la démontrer à part (souvent en résolvant explicitement $f(x)=f(x')$).
* > ⚠️ Inversement, l'injectivité seule ne suffit pas pour la régularité de la réciproque ($x\mapsto x^3$) : il faut $df_x$ inversible **en tout point**.
* La conclusion dit que $f(U)$ est ouvert, **pas** que $f(U)=F$ : pour la surjectivité, il faut un argument supplémentaire (par exemple propreté, ou un point fixe).
* Ne pas confondre « difféomorphisme local en tout point » (inversion locale partout) et « difféomorphisme » (bijection en plus).
